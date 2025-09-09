"use client";

import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";

export default function HeroBanner() {
  const images = [
    "/assets/img/1-updated-images/Hero-Section/Hero-section-slider-1.jpg",
    "/assets/img/1-updated-images/Hero-Section/Hero-section-slider-2.jpg",
    "/assets/img/1-updated-images/Hero-Section/Hero-section-slider-3.jpg",
  ];

  return (
    <div className="h-[100vh] w-full overflow-hidden">
      <ImagesSlider className="h-full w-full" images={images}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          <div className="px-4 text-center">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl text-white leading-snug">
              Welcome to Enlight Group of Institutions
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200">
              Direct Admission For Nursing and Paramedical
            </p>
          </div>
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-base sm:text-lg font-semibold transition-colors">
            Enquire Now
          </button>
        </motion.div>
      </ImagesSlider>
    </div>
  );
}
