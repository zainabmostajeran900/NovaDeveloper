"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // هر بار که مسیر عوض شد لودینگ نشون بده
    setLoading(true);
    setVisible(true);

    const hide = setTimeout(() => {
      setLoading(false);
      // بعد از fade-out کامل از DOM حذف شه
      setTimeout(() => setVisible(false), 400);
    }, 700);

    return () => clearTimeout(hide);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      style={{
        opacity: loading ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
      className="fixed inset-x-0 top-0 z-[100] flex flex-col items-center justify-center"
    >
      {/* نوار پیشرفت بالای صفحه */}
      <div className="h-[3px] w-full overflow-hidden bg-white/5">
        <div
          style={{
            width: loading ? "85%" : "100%",
            transition: loading
              ? "width 0.6s cubic-bezier(.4,0,.2,1)"
              : "width 0.2s ease",
          }}
          className="h-full bg-accent shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]"
        />
      </div>

      {/* آیکون لوگو وسط بالا */}
      <div className="mt-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-lg shadow-black/30 animate-bounce">
        <span className="font-heading text-lg font-black text-bg leading-none">
          {site.name.charAt(0)}
        </span>
      </div>
    </div>
  );
}
