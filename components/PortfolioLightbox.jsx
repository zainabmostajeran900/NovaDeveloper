"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function PortfolioLightbox({ image, alt, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 sm:p-4"
      onClick={onClose}
    >
      {/* دکمه بستن - بزرگتر برای موبایل */}
      <button
        onClick={onClose}
        className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white hover:text-accent transition-colors z-10 bg-black/50 rounded-full p-2 sm:p-0 backdrop-blur-sm"
        aria-label="Close lightbox"
      >
        <X size={28} className="sm:w-8 sm:h-8" />
      </button>
      
      {/* محتوای عکس */}
      <div
        className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center">
          <Image
            src={image}
            alt={alt || "Portfolio image"}
            width={1200}
            height={800}
            className="object-contain w-auto h-auto max-w-full max-h-[85vh] rounded-lg shadow-2xl"
            priority
            quality={100}
            sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 80vw"
          />
        </div>
      </div>

      {/* راهنمای بستن برای موبایل */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 text-xs sm:text-sm opacity-60 sm:opacity-0">
        Tap outside to close
      </div>
    </div>
  );
}