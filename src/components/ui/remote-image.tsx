"use client";

import Image from "next/image";
import { useState } from "react";

interface RemoteImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
  quality?: number;
}

export default function RemoteImage({
  src,
  alt,
  fill,
  className,
  sizes,
  loading,
  priority,
  quality = 90,
}: RemoteImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`absolute inset-0 flex items-center justify-center bg-beige/60 text-black/40 font-modak uppercase text-center p-4 ${className ?? ""}`}
      >
        Фото недоступно
      </div>
    );
  }

    return (
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={className}
        sizes={sizes}
        loading={loading}
        priority={priority}
        quality={quality}
        onError={() => setFailed(true)}
      />
  );
}
