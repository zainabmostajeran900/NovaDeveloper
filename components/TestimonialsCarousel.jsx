"use client";

import { useState, useEffect, useCallback } from "react";

const slideInRight = `
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(80px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-80px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  .slide-right { animation: slideInRight 0.5s ease both; }
  .slide-left  { animation: slideInLeft  0.5s ease both; }
`;

export default function TestimonialsCarousel({ items, autoPlayInterval = 4000 }) {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);

  // تشخیص سایز صفحه
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setItemsPerView(3); // دسکتاپ: 3 کارت
      } else if (width >= 640) {
        setItemsPerView(2); // تبلت: 2 کارت
      } else {
        setItemsPerView(1); // موبایل: 1 کارت
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const go = useCallback((next) => {
    const dir = next > active || (active === items.length - 1 && next === 0)
      ? "right"
      : "left";
    setDirection(dir);
    setAnimKey((k) => k + 1);
    setActive(next);
  }, [active, items.length]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % items.length;
        setDirection("right");
        setAnimKey((k) => k + 1);
        return next;
      });
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, items.length, autoPlayInterval]);

  // نمایش کارت‌ها بر اساس itemsPerView
  const visible = Array.from({ length: itemsPerView }, (_, i) => 
    items[(active + i) % items.length]
  );

  const animClass = direction === "right" ? "slide-right" : "slide-left";

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style>{slideInRight}</style>

      {/* Cards */}
      <div
        key={animKey}
        className={`grid gap-6 ${
          itemsPerView === 3 ? "md:grid-cols-3" : 
          itemsPerView === 2 ? "sm:grid-cols-2" : 
          "grid-cols-1"
        } ${animClass}`}
      >
        {visible.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="relative rounded-xl bg-[#161616]  px-6 pt-6 pb-16"
          >
            <p className="text-sm leading-relaxed text-gray-300">
              &ldquo;{t.quote}&rdquo;
            </p>

            <span className="absolute bottom-12 right-5 font-serif text-5xl font-bold leading-none text-accent opacity-80">
              &#8221;
            </span>

            <div className="absolute -bottom-8 left-6 flex items-end gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-16 w-16 rounded-full border-2 border-accent object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Names row */}
      <div
        key={`names-${animKey}`}
        className={`mt-12 grid gap-6 ${
          itemsPerView === 3 ? "md:grid-cols-3" : 
          itemsPerView === 2 ? "sm:grid-cols-2" : 
          "grid-cols-1"
        } ${animClass}`}
      >
        {visible.map((t, i) => (
          <div key={`name-${t.name}-${i}`} className="pl-2">
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-gray-400">{t.role}</p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Testimonial ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === active ? "bg-accent" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}