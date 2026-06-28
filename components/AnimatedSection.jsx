"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedSection({ children, delay = 0, className = "" }) {
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.6s cubic-bezier(.4,0,.2,1), opacity 0.6s ease",
      }}
    >
      {children}
    </div>
  );
}
