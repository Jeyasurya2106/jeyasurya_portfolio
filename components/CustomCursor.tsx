"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const cursorX = useSpring(0, { stiffness: 450, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 450, damping: 28 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMove = (e: MouseEvent) => {
      setVisible(true);
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      const target = e.target as HTMLElement | null;
      if (target?.closest("a, button, input, textarea, [data-interactive]")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <motion.div
      style={{ x: cursorX, y: cursorY }}
      animate={{
        scale: hovering ? 1.5 : 1,
        borderColor: hovering ? "#7c3aed" : "#00f0ff",
      }}
      transition={{ duration: 0.15 }}
      className="pointer-events-none fixed top-0 left-0 z-50 hidden md:flex h-8 w-8 items-center justify-center rounded-full border border-cyanNeon/80 bg-cyanNeon/10 backdrop-blur-[1px]"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyanNeon" />
    </motion.div>
  );
}
