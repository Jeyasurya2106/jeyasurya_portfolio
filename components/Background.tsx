"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed page backdrop: two slow colour fields, a dot matrix that swells
 * and brightens around the pointer, and film grain on top.
 */
export function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const GAP = 34;
    const RADIUS = 190;
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    const readColor = (name: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim().replace(/ /g, ",");
    let dot = readColor("--line");
    let hot = readColor("--glow");

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let gx = GAP / 2; gx < width; gx += GAP) {
        for (let gy = GAP / 2; gy < height; gy += GAP) {
          const dx = gx - pointer.x;
          const dy = gy - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const pull = dist < RADIUS ? 1 - dist / RADIUS : 0;
          const eased = pull * pull;

          // dots are nudged away from the pointer
          const px = gx + (dist ? (dx / dist) * eased * 10 : 0);
          const py = gy + (dist ? (dy / dist) * eased * 10 : 0);

          ctx.beginPath();
          ctx.arc(px, py, 0.9 + eased * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = eased > 0.02 ? `rgba(${hot},${0.12 + eased * 0.8})` : `rgba(${dot},0.1)`;
          ctx.fill();
        }
      }
    };

    const loop = () => {
      pointer.x += (pointer.tx - pointer.x) * 0.14;
      pointer.y += (pointer.ty - pointer.y) * 0.14;
      draw();
      if (Math.abs(pointer.tx - pointer.x) + Math.abs(pointer.ty - pointer.y) > 0.4) {
        raf = requestAnimationFrame(loop);
      } else {
        running = false;
      }
    };

    const kick = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch" || reduced) return;
      if (pointer.x < -999) {
        pointer.x = e.clientX;
        pointer.y = e.clientY;
      }
      pointer.tx = e.clientX;
      pointer.ty = e.clientY;
      kick();
    };

    // repaint with the new palette when the theme class flips
    const observer = new MutationObserver(() => {
      dot = readColor("--line");
      hot = readColor("--glow");
      draw();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-[20vw] -top-[25vh] h-[70vh] w-[70vh] animate-drift rounded-full bg-glow/[0.09] blur-[140px]" />
        <div
          className="absolute -bottom-[30vh] -right-[15vw] h-[75vh] w-[75vh] animate-drift rounded-full bg-ember/[0.08] blur-[150px]"
          style={{ animationDelay: "-11s" }}
        />
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      </div>
      <div aria-hidden className="grain" />
    </>
  );
}
