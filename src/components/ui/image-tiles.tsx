"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";

interface ImageRevealProps {
  leftImage: string;
  middleImage: string;
  rightImage: string;
  sticker?: React.ReactNode;
}

export default function ImageReveal({ leftImage, middleImage, rightImage, sticker }: ImageRevealProps) {
  const containerVariants: Variants = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: { delay: 0.2, staggerChildren: 0.2 },
    },
  };

  const leftImageVariants: Variants = {
    initial: { rotate: 0, x: 0, y: 0 },
    animate: {
      rotate: -8,
      x: "-92%",
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
    hover: {
      rotate: 1,
      x: "-97%",
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  const middleImageVariants: Variants = {
    initial: { rotate: 0, x: 0, y: 0 },
    animate: {
      rotate: 6,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
    hover: {
      rotate: 0,
      x: 0,
      y: -10,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  const rightImageVariants: Variants = {
    initial: { rotate: 0, x: 0, y: 0 },
    animate: {
      rotate: -6,
      x: "92%",
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
    hover: {
      rotate: 3,
      x: "97%",
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  const imageBox =
    "absolute w-[32vw] h-[32vw] max-w-[520px] max-h-[520px] origin-center overflow-hidden rounded-xl shadow-lg bg-white";

  return (
    <motion.div
      className="relative flex items-start justify-center w-[80vw] h-[40vw] md:h-[42vw] max-w-[1300px] max-h-[600px] mt-8 md:mt-16 mb-0"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className={imageBox}
        variants={leftImageVariants}
        whileHover="hover"
        animate="animate"
        style={{ zIndex: 30 }}
      >
        <Image
          src={leftImage}
          alt="Left image"
          fill
          className="object-cover p-2 rounded-xl"
          sizes="32vw"
        />
      </motion.div>

      <motion.div
        className={imageBox}
        variants={middleImageVariants}
        whileHover="hover"
        animate="animate"
        style={{ zIndex: 20 }}
      >
        <Image
          src={middleImage}
          alt="Middle image"
          fill
          className="object-cover p-2 rounded-xl"
          sizes="32vw"
        />
      </motion.div>

      <motion.div
        className={imageBox}
        variants={rightImageVariants}
        whileHover="hover"
        animate="animate"
        style={{ zIndex: 10 }}
      >
        <Image
          src={rightImage}
          alt="Right image"
          fill
          className="object-cover p-2 rounded-xl"
          sizes="32vw"
        />
      </motion.div>

      {sticker}
    </motion.div>
  );
}
