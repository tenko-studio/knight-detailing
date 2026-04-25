"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade" | "scale";

type RevealProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "whileInView" | "viewport" | "transition" | "variants"
> & {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  amount?: number;
  once?: boolean;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 40,
  amount = 0.18,
  once = true,
  className,
  ...rest
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} {...(rest as object)}>
        {children}
      </div>
    );
  }

  const from = {
    opacity: 0,
    x:
      direction === "left"
        ? distance
        : direction === "right"
          ? -distance
          : 0,
    y:
      direction === "up"
        ? distance
        : direction === "down"
          ? -distance
          : 0,
    scale: direction === "scale" ? 0.94 : 1,
  };

  return (
    <motion.div
      className={className}
      initial={from}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount, margin: "0px 0px -80px 0px" }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
