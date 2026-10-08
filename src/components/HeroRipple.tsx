"use client";
import { useRef, useEffect, useState } from "react";

// One water surface over the whole hero: the paper, the photo, and the headline are all drawn
// through it, so a ripple rolls from the photo across the type. A small height field runs the
// wave equation on the CPU; WebGL bends everything by the slope of that surface.
//
// The section supplies the layout: the photo box is marked data-hero-photo and the type is marked
// data-hero-text. The type is copied glyph by glyph from the live DOM (so kerning and wrapping match),
// then the real HTML text is hidden visually but kept for screen readers and selection.
// The loop sleeps once the water is still, and reduced-motion users get the plain hero.

const CELL = 4; // css px per simulation cell
const PAPER = [0.9804, 0.9804, 0.9725];
const TEAL = [0.0588, 0.4196, 0.4275]; // #0F6B6D

type Tune = {
  /** Wave speed (lower = slower, max 0.5 for a stable simulation) */
  speed: number;
  /** How long waves last (closer to 1 = longer) */
  damping: number;
  /** How far the picture bends, in uv units per unit of slope */
  refraction: number;
  /** Light catching the wave crests */
  highlight: number;
  /** Ripple size, in simulation cells */
  size: number;
  /** Strength of the trail the pointer leaves */
  trail: number;
  /** Strength of the splash a click makes */
  splash: number;
};

const DEFAULTS: Tune = { speed: 0.18, damping: 0.967, refraction: 0.04, highlight: 0.6, size: 4, trail: 0.8, splash: 1 };

// Slider ranges for the local tuning panel
const CONTROLS: { key: keyof Tune; label: string; min: number; max: number; step: number }[] = [
  { key: "speed", label: "Speed", min: 0.04, max: 0.5, step: 0.01 },
  { key: "refraction", label: "Strength", min: 0, max: 0.15, step: 0.005 },
  { key: "damping", label: "Fade", min: 0.95, max: 0.998, step: 0.001 },
  { key: "highlight", label: "Shine", min: 0, max: 3, step: 0.05 },
  { key: "size", label: "Ripple size", min: 1, max: 10, step: 0.5 },
  { key: "trail", label: "Trail", min: 0, max: 3, step: 0.05 },
  { key: "splash", label: "Click splash", min: 0, max: 3, step: 0.05 },
];

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision mediump float;
uniform sampler2D uImg;
uniform sampler2D uHeight;
uniform sampler2D uText;
uniform vec2 uSize;     // canvas size in device px
uniform vec2 uCell;     // one simulation cell in uv
uniform vec4 uPhoto;    // photo box in uv: x, y, w, h
uniform vec2 uScale;    // cover-fit inside the photo box: displayed image size / box size
uniform vec2 uOffset;   // cover-fit inside the photo box: image offset / box size
uniform float uRefract;
uniform float uLight;
uniform float uTextOn;
const vec3 PAPER = vec3(${PAPER.join(", ")});
const vec3 TEAL = vec3(${TEAL.join(", ")});

float h(vec2 uv) { return texture2D(uHeight, uv).r - 0.5; }

float inPhoto(vec2 uv) {
  vec2 p = (uv - uPhoto.xy) / uPhoto.zw;
  return (p.x < 0.0 || p.y < 0.0 || p.x > 1.0 || p.y > 1.0) ? 0.0 : 1.0;
}

vec3 backdrop(vec2 uv) {
  vec2 p = (uv - uPhoto.xy) / uPhoto.zw;
  if (p.x < 0.0 || p.y < 0.0 || p.x > 1.0 || p.y > 1.0) return PAPER;
  return texture2D(uImg, clamp((p - uOffset) / uScale, 0.0, 1.0)).rgb;
}

void main() {
  vec2 uv = vec2(gl_FragCoord.x / uSize.x, 1.0 - gl_FragCoord.y / uSize.y);
  vec2 slope = vec2(h(uv + vec2(uCell.x, 0.0)) - h(uv - vec2(uCell.x, 0.0)),
                    h(uv + vec2(0.0, uCell.y)) - h(uv - vec2(0.0, uCell.y)));
  vec2 bent = uv + slope * uRefract;
  vec3 b = backdrop(bent);
  // Type is teal on the paper and inverts over the photo (a difference blend of paper)
  float a = texture2D(uText, bent).a * uTextOn;
  vec3 ink = mix(TEAL, abs(b - PAPER), inPhoto(bent));
  vec3 col = mix(b, ink, a);
  col += (slope.x + slope.y) * uLight;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

function parsePosition(pos: string): [number, number] {
  const part = (v: string | undefined) => (v === undefined || v === "center" ? 0.5 : parseFloat(v) / 100);
  const [x, y] = pos.split(/\s+/);
  return [part(x), part(y)];
}

// Paint each glyph of the marked text at the exact spot the browser laid it out
function paintText(ctx: CanvasRenderingContext2D, section: HTMLElement, dpr: number) {
  const origin = section.getBoundingClientRect();
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, origin.width, origin.height);
  ctx.fillStyle = "#fff";
  ctx.textBaseline = "alphabetic";
  const range = document.createRange();
  for (const el of section.querySelectorAll<HTMLElement>("[data-hero-text]")) {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    for (let node = walker.nextNode() as Text | null; node; node = walker.nextNode() as Text | null) {
      const parent = node.parentElement;
      if (!parent) continue;
      const cs = getComputedStyle(parent);
      ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
      const upper = cs.textTransform === "uppercase";
      const text = node.data;
      for (let i = 0; i < text.length; i++) {
        const ch = upper ? text[i].toUpperCase() : text[i];
        if (!ch.trim()) continue;
        range.setStart(node, i);
        range.setEnd(node, i + 1);
        const r = range.getBoundingClientRect();
        if (!r.width) continue;
        const ascent = ctx.measureText(ch).fontBoundingBoxAscent;
        ctx.fillText(ch, r.left - origin.left, r.top - origin.top + ascent);
      }
    }
  }
}

export default function HeroRipple({ src, objectPosition = "50% 50%" }: { src: string; objectPosition?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tune = useRef<Tune>({ ...DEFAULTS });
  const actions = useRef<{ redraw: () => void; splash: () => void } | null>(null);
  const setTune = (key: keyof Tune, v: number) => {
    tune.current[key] = v;
    actions.current?.redraw();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.parentElement;
    const photo = section?.querySelector<HTMLElement>("[data-hero-photo]");
    if (!canvas || !section || !photo) return;
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
    const textTex = makeTexture(2);
    gl.uniform1i(u("uImg"), 0);
    gl.uniform1i(u("uHeight"), 1);
    gl.uniform1i(u("uText"), 2);
    gl.uniform1f(u("uTextOn"), 0);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);

    const textCanvas = document.createElement("canvas");
    const textCtx = textCanvas.getContext("2d")!;

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
    let introUntil = 0;
    // While the preloader's copy of the name is flying in, keep this copy of the type hidden
    let textOn = document.documentElement.dataset.intro === "on" ? 0 : 1;

    const uploadHeight = () => {
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, heightTex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, gw, gh, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, bytes);
    };

    const render = () => {
      if (!ready) return;
      gl.uniform1f(u("uRefract"), tune.current.refraction);
      gl.uniform1f(u("uLight"), tune.current.highlight);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const paintType = () => {
      if (cancelled) return;
      paintText(textCtx, section, canvas.width / Math.max(1, cssW));
      gl.activeTexture(gl.TEXTURE2);
      gl.bindTexture(gl.TEXTURE_2D, textTex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas);
      gl.uniform1f(u("uTextOn"), textOn);
      render();
    };

    const layout = () => {
      const rect = section.getBoundingClientRect();
      cssW = rect.width; cssH = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(cssW * dpr));
      canvas.height = Math.max(1, Math.round(cssH * dpr));
      textCanvas.width = canvas.width;
      textCanvas.height = canvas.height;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(u("uSize"), canvas.width, canvas.height);

      gw = Math.max(2, Math.ceil(cssW / CELL));
      gh = Math.max(2, Math.ceil(cssH / CELL));
      cur = new Float32Array(gw * gh);
      prev = new Float32Array(gw * gh);
      bytes = new Uint8Array(gw * gh).fill(128);
      gl.uniform2f(u("uCell"), 1 / gw, 1 / gh);
      uploadHeight();

      const p = photo.getBoundingClientRect();
      gl.uniform4f(u("uPhoto"), (p.left - rect.left) / cssW, (p.top - rect.top) / cssH, p.width / cssW, p.height / cssH);
      if (imgW) {
        // Same math as object-fit: cover with the img's object-position
        const scale = Math.max(p.width / imgW, p.height / imgH);
        const dw = imgW * scale, dh = imgH * scale;
        gl.uniform2f(u("uScale"), dw / p.width, dh / p.height);
        gl.uniform2f(u("uOffset"), ((p.width - dw) * posX) / p.width, ((p.height - dh) * posY) / p.height);
      }
      if (ready) paintType();
      render();
    };

    const step = () => {
      const { speed } = tune.current;
      // The intro splash rings out a little longer than everyday ripples
      const damping = performance.now() < introUntil ? Math.max(tune.current.damping, 0.985) : tune.current.damping;
      let energy = 0;
      for (let y = 1; y < gh - 1; y++) {
        for (let x = 1; x < gw - 1; x++) {
          const i = y * gw + x;
          const c = cur[i];
          const lap = cur[i - 1] + cur[i + 1] + cur[i - gw] + cur[i + gw] - 4 * c;
          const v = (2 * c - prev[i] + speed * lap) * damping;
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
      if (stillFrames > 45) {
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

    // Slider drags on the tuning panel shouldn't make ripples underneath it
    const fromPanel = (e: PointerEvent) => !!(e.target as Element | null)?.closest?.("[data-tune-panel]");
    const onMove = (e: PointerEvent) => {
      if (fromPanel(e)) { last = null; return; }
      const rect = section.getBoundingClientRect();
      const p = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (last) {
        const dist = Math.hypot(p.x - last.x, p.y - last.y);
        const steps = Math.min(12, Math.ceil(dist / 10));
        const strength = Math.min(1.1, 0.25 + dist / 60) * tune.current.trail;
        for (let s = 1; s <= steps; s++) {
          const t = s / steps;
          drop(last.x + (p.x - last.x) * t, last.y + (p.y - last.y) * t, tune.current.size, (strength / steps) * 2);
        }
      }
      last = p;
    };
    const onDown = (e: PointerEvent) => {
      if (fromPanel(e)) return;
      const rect = section.getBoundingClientRect();
      drop(e.clientX - rect.left, e.clientY - rect.top, tune.current.size * 2.3, 2.2 * tune.current.splash);
    };
    const onLeave = () => { last = null; };

    // The preloader's window opening drops one big splash in the middle of the screen
    let pendingSplash = false;
    const splashCenter = () => {
      if (!ready) { pendingSplash = true; return; }
      const rect = section.getBoundingClientRect();
      const cx = window.innerWidth / 2 - rect.left, cy = window.innerHeight / 2 - rect.top;
      introUntil = performance.now() + 2200;
      // Three pulses, like a stone landing and the water answering
      [0, 160, 340].forEach((delay, i) => setTimeout(() => {
        if (!cancelled) drop(cx, cy, tune.current.size * (4 - i), (4 - i * 1.2) * tune.current.splash);
      }, delay));
    };

    const img = new Image();
    img.decoding = "async";
    img.onload = async () => {
      if (cancelled) return;
      imgW = img.naturalWidth; imgH = img.naturalHeight;
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, imgTex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
      await document.fonts.ready;
      if (cancelled) return;
      ready = true;
      layout();
      // Swap the HTML type for the rippling copy only once the copy is on screen
      canvas.style.opacity = "1";
      section.dataset.ripple = "on";
      if (pendingSplash) { pendingSplash = false; splashCenter(); }
    };
    img.src = src;

    actions.current = {
      redraw: render,
      splash: () => drop(cssW * 0.6, cssH * 0.55, tune.current.size * 2.3, 2.2 * tune.current.splash),
    };

    const ro = new ResizeObserver(layout);
    ro.observe(section);
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerdown", onDown);
    section.addEventListener("pointerleave", onLeave);
    // The headline refits its size after fonts load and on resize
    const onHeroLayout = () => { if (ready) paintType(); };
    // The preloader's name has landed exactly on this copy: swap to it in the same frame
    const onIntroDone = () => {
      textOn = 1;
      gl.uniform1f(u("uTextOn"), textOn);
      render();
    };
    window.addEventListener("hero:splash", splashCenter);
    window.addEventListener("hero:layout", onHeroLayout);
    window.addEventListener("intro:done", onIntroDone);
    return () => {
      window.removeEventListener("hero:splash", splashCenter);
      window.removeEventListener("hero:layout", onHeroLayout);
      window.removeEventListener("intro:done", onIntroDone);
      cancelled = true;
      actions.current = null;
      delete section.dataset.ripple;
      ro.disconnect();
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerdown", onDown);
      section.removeEventListener("pointerleave", onLeave);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [src, objectPosition]);

  return (
    <>
      {/* Stays invisible until the photo and type are on the GPU, so the plain hero shows first */}
      <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" style={{ pointerEvents: "none", opacity: 0 }} />
      {process.env.NODE_ENV === "development" && <TunePanel onChange={setTune} onSplash={() => actions.current?.splash()} />}
    </>
  );
}

// Local-only sliders for dialing in the ripples. Never rendered in production builds.
function TunePanel({ onChange, onSplash }: { onChange: (key: keyof Tune, v: number) => void; onSplash: () => void }) {
  const [values, setValues] = useState<Tune>({ ...DEFAULTS });
  const [open, setOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const set = (key: keyof Tune, v: number) => {
    onChange(key, v);
    setValues((prev) => ({ ...prev, [key]: v }));
  };
  const summary = CONTROLS.map((c) => `${c.label}: ${values[c.key]}`).join(", ");

  return (
    <div
      data-tune-panel
      className="fixed z-[60] bg-[#FAFAF8] text-black"
      style={{ top: "calc(var(--nav-height) + 12px)", right: 16, width: 260, border: "1px solid rgba(56,56,59,0.16)", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", fontSize: "0.75rem" }}
    >
      <button type="button" onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between px-3 py-2" style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}>
        Ripple settings <span aria-hidden>{open ? "–" : "+"}</span>
      </button>
      {open && (
        <div className="flex flex-col gap-3 px-3 pb-3">
          {CONTROLS.map((c) => (
            <label key={c.key} className="flex flex-col gap-1">
              <span className="flex justify-between">
                <span>{c.label}</span>
                <span style={{ fontVariantNumeric: "tabular-nums", color: "#38383B" }}>{values[c.key]}</span>
              </span>
              <input type="range" min={c.min} max={c.max} step={c.step} value={values[c.key]} onChange={(e) => set(c.key, parseFloat(e.target.value))} style={{ accentColor: "#0F6B6D" }} />
            </label>
          ))}
          <div className="flex gap-2">
            <button type="button" onClick={onSplash} className="flex-1 bg-black px-2 py-2 text-[#FAFAF8] hover:bg-[#0F6B6D]">Test splash</button>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard?.writeText(summary).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); });
              }}
              className="flex-1 border border-black px-2 py-2 hover:bg-black hover:text-[#FAFAF8]"
            >
              {copied ? "Copied" : "Copy values"}
            </button>
          </div>
          <button type="button" onClick={() => CONTROLS.forEach((c) => set(c.key, DEFAULTS[c.key]))} className="self-start underline underline-offset-2" style={{ color: "#38383B" }}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
