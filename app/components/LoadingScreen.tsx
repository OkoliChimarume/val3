"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    // Complete after 3 seconds (including fade out animation)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={[
        "fixed inset-0 z-50 grid place-items-center bg-black overflow-hidden",
        fadeOut ? "loading-fade-out" : "loading-fade-in",
      ].join(" ")}
    >
      <div className="relative h-100 w-100 max-w-[90vw]">
        <Image
          src="/image.gif"
          alt="Loading animation"
          fill
          className="object-contain"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}
