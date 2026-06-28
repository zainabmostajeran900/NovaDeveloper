"use client";

import { useState, useEffect, useCallback } from "react";
import { ZoomIn, Link2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioCategories, portfolioItems } from "@/data/portfolio";

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");
  const [previewIndex, setPreviewIndex] = useState(null);

  const filtered =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === active);

  const preview = previewIndex !== null ? filtered[previewIndex] : null;

  const closePreview = useCallback(() => {
    setPreviewIndex(null);
  }, []);

  const goToPrevious = useCallback(() => {
    setPreviewIndex((prev) =>
      prev > 0 ? prev - 1 : filtered.length - 1
    );
  }, [filtered.length]);

  const goToNext = useCallback(() => {
    setPreviewIndex((prev) =>
      prev < filtered.length - 1 ? prev + 1 : 0
    );
  }, [filtered.length]);

  // بررسی اینکه لینک واقعی است یا فقط placeholder ("#" یا خالی)
  const hasValidLink = (link) => Boolean(link) && link !== "#";

  // باز کردن لینک در تب جدید به‌صورت مطمئن
  const openLink = useCallback((e, link) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasValidLink(link)) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  }, []);

  // جلوگیری از اسکرول پس‌زمینه
  useEffect(() => {
    if (previewIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [previewIndex]);

  // ناوبری با کیبورد
  useEffect(() => {
    if (previewIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closePreview();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewIndex, closePreview, goToPrevious, goToNext]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-6">
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-md font-medium transition-colors ${
              active === cat
                ? "text-accent"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <div
            key={item.title}
            className="group relative aspect-[4/3] overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/60" />

            {/* آیکون‌های وسط */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20">
              <button
                type="button"
                onClick={() => setPreviewIndex(index)}
                aria-label={`Preview ${item.title}`}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-bg transition-transform hover:scale-110"
              >
                <ZoomIn size={18} />
              </button>
              {hasValidLink(item.link) && (
                <button
                  type="button"
                  onClick={(e) => openLink(e, item.link)}
                  aria-label={`Open ${item.title} link`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-bg transition-transform hover:scale-110"
                >
                  <Link2 size={18} />
                </button>
              )}
            </div>

            {/* عنوان و دسته‌بندی */}
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
              <p className="font-heading font-semibold">{item.title}</p>
              <p className="text-xs uppercase tracking-wide text-accent">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox - نسخه ساده و مطمئن */}
      {preview && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-6"
          onClick={closePreview}
        >
          {/* دکمه بستن */}
          <button
            type="button"
            onClick={closePreview}
            aria-label="Close preview"
            className="absolute right-4 top-4 md:right-6 md:top-6 z-[10000] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>

          {/* دکمه قبلی */}
          {filtered.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-[10000] flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* دکمه بعدی */}
          {filtered.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              aria-label="Next image"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-[10000] flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* محتوای تصویر */}
          <div
            className="max-h-[90vh] max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={preview.image}
              alt={preview.title}
              className="max-h-[75vh] w-full rounded-lg object-contain"
            />
            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="font-heading text-lg font-semibold text-white truncate">
                  {preview.title}
                </p>
                <p className="text-sm text-accent">{preview.category}</p>
              </div>
              {hasValidLink(preview.link) && (
                <button
                  type="button"
                  onClick={(e) => openLink(e, preview.link)}
                  className="flex-shrink-0 flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-bg hover:bg-accent-dark transition-colors"
                >
                  <Link2 size={16} />
                  Visit Project
                </button>
              )}
            </div>

            {/* شمارنده */}
            {filtered.length > 1 && (
              <div className="mt-3 text-center text-white/60 text-sm">
                {previewIndex + 1} / {filtered.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
