"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function Parallax({
  children,
  className,
  speed = 0.2,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-speed * 50}%`, `${speed * 50}%`],
  );

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`${className ?? ""} overflow-hidden`}>
      <motion.div style={{ y }} className="w-full h-[130%] -mt-[15%]">
        {children}
      </motion.div>
    </div>
  );
}

export function ParallaxImage({
  src,
  alt,
  className,
  speed = 0.15,
  imgClassName = "w-full h-full object-cover",
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  imgClassName?: string;
}) {
  return (
    <Parallax className={className} speed={speed}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={imgClassName} />
    </Parallax>
  );
}
