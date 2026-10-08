"use client";
import { useRef, useEffect, ReactNode } from "react";

// Water ripples over the hero photo. A small height field runs the wave equation on the CPU
// (one cell per CELL css px); WebGL then bends the photo by the slope of that surface, like
// light refracting through water. The pointer drops ripples as it moves; a press drops a bigger one.
// The loop sleeps once the water is still, and reduced-motion users get the plain photo.

const CELL = 4; // css px per simulation cell
const DAMPING = 0.99; // how quickly waves die out
const REFRACTION = 0.045; // how far the photo bends, in uv units per unit of slope
const HIGHLIGHT = 0.9; // light catching the wave crests

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision mediump float;
uniform sampler2D uImg;
uniform sampler2D uHeight;
uniform vec2 uSize;     // canvas size in device px
uniform vec2 uCell;     // one simulation cell in uv
uniform vec2 uScale;    // cover-fit: displayed image size / container size
uniform vec2 uOffset;   // cover-fit: image offset / container size
uniform float uRefract;
uniform float uLight;

float h(vec2 uv) { return texture2D(uHeight, uv).r - 0.5; }

void main() {
  vec2 uv = vec2(gl_FragCoord.x / uSize.x, 1.0 - gl_FragCoord.y / uSize.y);
  vec2 slope = vec2(h(uv + vec2(uCell.x, 0.0)) - h(uv - vec2(uCell.x, 0.0)),
                    h(uv + vec2(0.0, uCell.y)) - h(uv - vec2(0.0, uCell.y)));
  vec2 bent = uv + slope * uRefract;
  vec2 imgUv = (bent - uOffset) / uScale;
  vec3 col = texture2D(uImg, clamp(imgUv, 0.0, 1.0)).rgb;
  col += (slope.x + slope.y) * uLight;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

function parsePosition(pos: string): [number, number] {
  const part = (v: string | undefined) => (v === undefined || v === "center" ? 0.5 : parseFloat(v) / 100);
  const [x, y] = pos.split(/\s+/);
  return [part(x), part(y)];
}

export default function HeroImage({ src, children, fill }: { src: string; children?: ReactNode; /** Fill the parent box instead of a fixed 88vh band */ fill?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const objectPosition = fill ? "80% 40%" : "72% center";

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const gl = canvas.getContext("webgl", { alpha: false, antialias: false, premultipliedAlpha: false });
    if (!gl) return;

    const compile = (type: number, source: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, source);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const u = (name: string) => gl.getUniformLocation(prog, name);
    const makeTexture = (unit: number) => {
      const t = gl.createTexture()!;
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, t);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      return t;
    };
    const imgTex = makeTexture(0);
    const heightTex = makeTexture(1);
    gl.uniform1i(u("uImg"), 0);
    gl.uniform1i(u("uHeight"), 1);
    gl.uniform1f(u("uRefract"), REFRACTION);
    gl.uniform1f(u("uLight"), HIGHLIGHT);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);

    const [posX, posY] = parsePosition(objectPosition);
    let imgW = 0, imgH = 0, cssW = 0, cssH = 0;
    let gw = 0, gh = 0;
    let cur = new Float32Array(0), prev = new Float32Array(0);
    let bytes = new Uint8Array(0);
    let raf: number | null = null;
    let ready = false;
    let stillFrames = 0;
    let last: { x: number; y: number } | null = null;
    let cancelled = false;

    const layout = () => {
      const rect = container.getBoundingClientRect();
      cssW = rect.width; cssH = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(cssW * dpr));
      canvas.height = Math.max(1, Math.round(cssH * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(u("uSize"), canvas.width, canvas.height);

      gw = Math.max(2, Math.ceil(cssW / CELL));
      gh = Math.max(2, Math.ceil(cssH / CELL));
      cur = new Float32Array(gw * gh);
      prev = new Float32Array(gw * gh);
      bytes = new Uint8Array(gw * gh).fill(128);
      gl.uniform2f(u("uCell"), 1 / gw, 1 / gh);
      uploadHeight();

      if (imgW) {
        // Same math as object-fit: cover with the img's object-position
        const scale = Math.max(cssW / imgW, cssH / imgH);
        const dw = imgW * scale, dh = imgH * scale;
        gl.uniform2f(u("uScale"), dw / cssW, dh / cssH);
        gl.uniform2f(u("uOffset"), ((cssW - dw) * posX) / cssW, ((cssH - dh) * posY) / cssH);
      }
      render();
    };

    const uploadHeight = () => {
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, heightTex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, gw, gh, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, bytes);
    };

    const render = () => {
      if (!ready) return;
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const step = () => {
      let energy = 0;
      for (let y = 1; y < gh - 1; y++) {
        for (let x = 1; x < gw - 1; x++) {
          const i = y * gw + x;
          const v = ((cur[i - 1] + cur[i + 1] + cur[i - gw] + cur[i + gw]) * 0.5 - prev[i]) * DAMPING;
          prev[i] = v;
          energy += v < 0 ? -v : v;
        }
      }
      const t = prev; prev = cur; cur = t;
      for (let i = 0; i < cur.length; i++) {
        const b = 128 + cur[i] * 96;
        bytes[i] = b < 0 ? 0 : b > 255 ? 255 : b;
      }
      return energy;
    };

    const loop = () => {
      const energy = step();
      uploadHeight();
      render();
      // Total motion across the whole surface; below this the water reads as flat
      stillFrames = energy < 1.5 ? stillFrames + 1 : 0;
      if (stillFrames > 30) {
        cur.fill(0); prev.fill(0); bytes.fill(128);
        uploadHeight(); render();
        raf = null;
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    const wake = () => { stillFrames = 0; if (raf === null && ready) raf = requestAnimationFrame(loop); };

    const drop = (cx: number, cy: number, radius: number, strength: number) => {
      const gx = cx / CELL, gy = cy / CELL;
      const r = Math.ceil(radius);
      for (let y = Math.max(1, Math.floor(gy - r)); y <= Math.min(gh - 2, Math.ceil(gy + r)); y++) {
        for (let x = Math.max(1, Math.floor(gx - r)); x <= Math.min(gw - 2, Math.ceil(gx + r)); x++) {
          const d = Math.hypot(x - gx, y - gy) / radius;
          if (d < 1) cur[y * gw + x] += strength * 0.5 * (1 + Math.cos(d * Math.PI));
        }
      }
      wake();
    };

    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const p = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (last) {
        const dist = Math.hypot(p.x - last.x, p.y - last.y);
        const steps = Math.min(12, Math.ceil(dist / 10));
        const strength = Math.min(1.1, 0.25 + dist / 60);
        for (let s = 1; s <= steps; s++) {
          const t = s / steps;
          drop(last.x + (p.x - last.x) * t, last.y + (p.y - last.y) * t, 3, strength / steps * 2);
        }
      }
      last = p;
    };
    const onDown = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      drop(e.clientX - rect.left, e.clientY - rect.top, 7, 2.2);
    };
    const onLeave = () => { last = null; };

    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      if (cancelled) return;
      imgW = img.naturalWidth; imgH = img.naturalHeight;
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, imgTex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
      ready = true;
      layout();
      canvas.style.opacity = "1";
    };
    img.src = src;

    const ro = new ResizeObserver(layout);
    ro.observe(container);
    container.addEventListener("pointermove", onMove);
    container.addEventListener("pointerdown", onDown);
    container.addEventListener("pointerleave", onLeave);
    return () => {
      cancelled = true;
      ro.disconnect();
      container.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerdown", onDown);
      container.removeEventListener("pointerleave", onLeave);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [src, objectPosition]);

  return (
    <div ref={containerRef} className={`relative w-full ${fill ? "h-full" : ""}`}>
      <img src={src} alt="" width={1125} height={751} fetchPriority="high" decoding="async" className="w-full block" style={{ objectFit: "cover", height: fill ? "100%" : "88vh", objectPosition }} />
      {children}
      {/* Stays invisible until the photo is on the GPU, so the plain img shows first */}
      <canvas ref={canvasRef} aria-hidden className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none", opacity: 0 }} />
    </div>
  );
}
