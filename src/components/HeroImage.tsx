"use client";
import { useRef, useEffect, useCallback, ReactNode } from "react";
import gsap from "gsap";

const PIXEL_SIZE = 22;
const RECT_W = 240;
const RECT_H = 180;
const FEATHER = 36;
const TEAL = "#0F6B6D";
const TEAL_EVERY = 9;

function isTeal(gx: number, gy: number): boolean {
  const h = ((gx * 2654435761) ^ (gy * 2246822519)) >>> 0;
  return h % TEAL_EVERY === 0;
}

export default function HeroImage({ src, children }: { src: string; children?: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offscreenRef = useRef<HTMLCanvasElement | null>(null);
  const tmpRef = useRef<HTMLCanvasElement | null>(null);
  const maskRef = useRef<HTMLCanvasElement | null>(null);
  const stateRef = useRef({ x: 0, y: 0, radius: 0 });
  const rafRef = useRef<number | null>(null);

  const buildOffscreen = useCallback((w: number, h: number) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const off = document.createElement("canvas");
      off.width = Math.ceil(w / PIXEL_SIZE);
      off.height = Math.ceil(h / PIXEL_SIZE);
      const ctx = off.getContext("2d")!;
      ctx.drawImage(img, 0, 0, off.width, off.height);
      offscreenRef.current = off;

      const tmp = document.createElement("canvas");
      tmp.width = w; tmp.height = h;
      tmpRef.current = tmp;

      const mask = document.createElement("canvas");
      mask.width = w; mask.height = h;
      maskRef.current = mask;
    };
  }, [src]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ro = new ResizeObserver(() => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      buildOffscreen(width, height);
    });
    ro.observe(container);
    return () => ro.disconnect();
  }, [buildOffscreen]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const off = offscreenRef.current;
    const tmp = tmpRef.current;
    const mask = maskRef.current;
    if (!canvas || !off || !tmp || !mask) return;

    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (stateRef.current.radius < 1) return;

    const { x, y, radius } = stateRef.current;
    const scale = radius / 100;
    const hw = (RECT_W / 2) * scale;
    const hh = (RECT_H / 2) * scale;
    const rx = Math.max(0, x - hw);
    const ry = Math.max(0, y - hh);
    const rw = Math.min(canvas.width - rx, hw * 2);
    const rh = Math.min(canvas.height - ry, hh * 2);

    // --- draw pixelated image + teal to tmp ---
    const tctx = tmp.getContext("2d")!;
    tctx.clearRect(0, 0, tmp.width, tmp.height);
    tctx.imageSmoothingEnabled = false;
    tctx.drawImage(off, 0, 0, tmp.width, tmp.height);

    const startGX = Math.floor(rx / PIXEL_SIZE);
    const endGX = Math.ceil((rx + rw) / PIXEL_SIZE);
    const startGY = Math.floor(ry / PIXEL_SIZE);
    const endGY = Math.ceil((ry + rh) / PIXEL_SIZE);
    tctx.fillStyle = TEAL;
    for (let gx = startGX; gx <= endGX; gx++) {
      for (let gy = startGY; gy <= endGY; gy++) {
        if (isTeal(gx, gy)) tctx.fillRect(gx * PIXEL_SIZE, gy * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
      }
    }

    // --- build feathered rect mask ---
    const mctx = mask.getContext("2d")!;
    mctx.clearRect(0, 0, mask.width, mask.height);

    // Solid center
    mctx.fillStyle = "white";
    mctx.fillRect(rx + FEATHER, ry + FEATHER, rw - FEATHER * 2, rh - FEATHER * 2);

    // Side gradients — each fades from white (inner edge) to transparent (outer edge)
    const sideEdges: [number, number, number, number, number, number, number, number, boolean][] = [
      [rx, 0, rx + FEATHER, 0, rx, ry + FEATHER, FEATHER, rh - FEATHER * 2, false],             // left: transparent→white
      [rx + rw - FEATHER, 0, rx + rw, 0, rx + rw - FEATHER, ry + FEATHER, FEATHER, rh - FEATHER * 2, true], // right: white→transparent
      [0, ry, 0, ry + FEATHER, rx + FEATHER, ry, rw - FEATHER * 2, FEATHER, false],             // top: transparent→white
      [0, ry + rh - FEATHER, 0, ry + rh, rx + FEATHER, ry + rh - FEATHER, rw - FEATHER * 2, FEATHER, true], // bottom: white→transparent
    ];
    for (const [x0, y0, x1, y1, fx, fy, fw, fh, invert] of sideEdges) {
      const g = mctx.createLinearGradient(x0, y0, x1, y1);
      g.addColorStop(0, invert ? "white" : "transparent");
      g.addColorStop(1, invert ? "transparent" : "white");
      mctx.fillStyle = g;
      mctx.fillRect(fx, fy, fw, fh);
    }

    // Corner radial gradients
    const corners: [number, number][] = [
      [rx + FEATHER, ry + FEATHER],
      [rx + rw - FEATHER, ry + FEATHER],
      [rx + FEATHER, ry + rh - FEATHER],
      [rx + rw - FEATHER, ry + rh - FEATHER],
    ];
    const cornerRects: [number, number][] = [
      [rx, ry], [rx + rw - FEATHER, ry],
      [rx, ry + rh - FEATHER], [rx + rw - FEATHER, ry + rh - FEATHER],
    ];
    corners.forEach(([cx2, cy2], i) => {
      const g = mctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, FEATHER);
      g.addColorStop(0, "white");
      g.addColorStop(1, "transparent");
      mctx.fillStyle = g;
      mctx.fillRect(cornerRects[i][0], cornerRects[i][1], FEATHER, FEATHER);
    });

    // Apply mask to tmp
    tctx.globalCompositeOperation = "destination-in";
    tctx.drawImage(mask, 0, 0);
    tctx.globalCompositeOperation = "source-over";

    // Draw tmp to main canvas — high opacity so pixels replace rather than overlay
    ctx.globalAlpha = 0.94;
    ctx.drawImage(tmp, 0, 0);
    ctx.globalAlpha = 1;
  }, []);

  useEffect(() => {
    const loop = () => { draw(); rafRef.current = requestAnimationFrame(loop); };
    rafRef.current = requestAnimationFrame(loop);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [draw]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    stateRef.current.x = e.clientX - rect.left;
    stateRef.current.y = e.clientY - rect.top;
  }, []);

  const handleMouseEnter = useCallback(() => {
    gsap.to(stateRef.current, { radius: 100, duration: 0.5, ease: "power3.out" });
  }, []);

  const handleMouseLeave = useCallback(() => {
    gsap.to(stateRef.current, { radius: 0, duration: 0.6, ease: "power3.in" });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ cursor: "none" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt="" className="w-full block" style={{ objectFit: "cover", height: "88vh", objectPosition: "center" }} />
      {children}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
