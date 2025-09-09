"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: boolean;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Next & Previous Handlers
  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500); // Match this with your transition duration
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500); // Match this with your transition duration
  };

  // Preload images
  useEffect(() => {
    const loadPromises = images.map(
      (image) =>
        new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = () => resolve(image);
          img.onerror = reject;
        })
    );

    Promise.all(loadPromises)
      .then((loaded) => setLoadedImages(loaded))
      .catch((err) => console.error("Failed to load images", err));
  }, [images]);

  // Autoplay + Keyboard support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: NodeJS.Timeout | null = null;
    if (autoplay) {
      interval = setInterval(handleNext, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, isTransitioning]);

  // Animation Variants
  const slideVariants = {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  } as const;

  return (
    <div
      className={cn(
        "relative flex h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full items-center justify-center overflow-hidden",
        className
      )}
    >
      {loadedImages.length > 0 && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial="initial"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={loadedImages[currentIndex]}
              className="h-full w-full object-cover object-center"
              alt="Hero background"
            />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Overlay */}
      {loadedImages.length > 0 && overlay && (
        <div
          className={cn(
            "absolute inset-0 bg-black/60 z-20",
            overlayClassName
          )}
        />
      )}

      {/* Content Layer */}
      <div className="relative z-30 flex w-full justify-center px-4 text-center">
        {children}
      </div>
    </div>
  );
};
