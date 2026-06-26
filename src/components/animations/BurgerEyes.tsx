"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

interface BurgerEyesProps {
  visible: boolean;
  smiled: boolean;
}

export default function BurgerEyes({ visible, smiled }: BurgerEyesProps) {
  const leftPupilX = useMotionValue(0);
  const leftPupilY = useMotionValue(0);
  const rightPupilX = useMotionValue(0);
  const rightPupilY = useMotionValue(0);
  const [isOverInteractive, setIsOverInteractive] = useState(false);

  useEffect(() => {
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('button, a, [role="button"], input[type="submit"], label, summary');
      setIsOverInteractive(!!interactive);
    };

    document.addEventListener("mouseover", handleOver);
    return () => document.removeEventListener("mouseover", handleOver);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!visible) return;

      const x = (e.clientX - window.innerWidth / 2) / 35;
      const y = (e.clientY - window.innerHeight / 2) / 35;
      const targetX = Math.min(8, Math.max(-8, x));
      const targetY = Math.min(8, Math.max(-8, y));

      leftPupilX.set(targetX);
      leftPupilY.set(targetY);
      rightPupilX.set(targetX);
      rightPupilY.set(targetY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [visible, leftPupilX, leftPupilY, rightPupilX, rightPupilY]);

  return (
    <div className="absolute top-[28%] left-1/2 -translate-x-1/2 pointer-events-none">
      <div className="flex gap-[5vw] md:gap-[2.5vw] items-center">
        {/* === ЛЕВЫЙ ГЛАЗ === */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={visible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
        >
          <motion.div
            className="relative w-[6vw] h-[8vw] md:w-[2.8vw] md:h-[3.8vw] rounded-full bg-white shadow-md border-2 border-black/5 overflow-hidden"
            animate={visible ? { scaleY: [1, 0.1, 0.05, 0.1, 1] } : { scaleY: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 5,
            }}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="w-[2.2vw] h-[2.2vw] md:w-[1vw] md:h-[1vw] rounded-full bg-black"
                style={{ x: leftPupilX, y: leftPupilY }}
                animate={{ scale: isOverInteractive ? 1.4 : 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* === ПРАВЫЙ ГЛАЗ === */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={visible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
        >
          <motion.div
            className="relative w-[6vw] h-[8vw] md:w-[2.8vw] md:h-[3.8vw] rounded-full bg-white shadow-md border-2 border-black/5 overflow-hidden"
            animate={visible ? { scaleY: [1, 0.1, 0.05, 0.1, 1] } : { scaleY: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 5,
              delay: 2.5,
            }}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="w-[2.2vw] h-[2.2vw] md:w-[1vw] md:h-[1vw] rounded-full bg-black"
                style={{ x: rightPupilX, y: rightPupilY }}
                animate={{ scale: isOverInteractive ? 1.4 : 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* === УЛЫБКА === */}
      <motion.div
        className="absolute top-[130%] left-1/2 -translate-x-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={
          smiled
            ? { scale: 1, opacity: 1 }
            : { scale: 0, opacity: 0 }
        }
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
      >
        <svg
          width="80"
          height="40"
          viewBox="0 0 80 40"
          className="w-[14vw] md:w-[5vw] h-auto"
        >
          <path
            d="M8 10 Q40 36 72 10"
            stroke="#1b1b1b"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
