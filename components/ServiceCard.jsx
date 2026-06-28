"use client";
import { useEffect, useRef, useState } from "react";

export default function ServiceCard({ icon: Icon, title, description, index, rowDelay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${rowDelay}ms`,
        transform: visible ? "translateY(0)" : "translateY(60px)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.55s cubic-bezier(.4,0,.2,1), opacity 0.55s ease",
      }}
      className="group flex flex-col !rounded-lg items-center text-center px-10 py-14 border border-white/5 bg-[#1c1c1c] hover:bg-accent hover:border-accent cursor-pointer"
    >
      <span className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-accent group-hover:bg-white/20 transition-colors duration-250">
        <Icon className="h-8 w-8 text-[#0a0a0a] group-hover:text-white transition-colors duration-250" strokeWidth={1.8} />
      </span>
      <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#0a0a0a] transition-colors duration-250">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-400 group-hover:text-[#0a0a0a]/80 transition-colors duration-250">
        {description}
      </p>
    </div>
  );
}