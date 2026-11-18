"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
}

export function Card({ children, className = "", enableTilt = true }: CardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className={`rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-surface/70 backdrop-blur-xl p-6 shadow-xl shadow-slate-900/5 dark:shadow-black/40 transition-colors duration-300 hover:border-cyanNeon/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
