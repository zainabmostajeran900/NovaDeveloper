"use client";

import { useEffect, useState } from "react";
import TypedRoles from "@/components/TypedRoles";
import SocialLinks from "@/components/SocialLinks";
import { profile } from "@/data/profile";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const slideIn = (delay) => ({
    transitionDelay: `${delay}ms`,
    transform: mounted ? "translateY(0)" : "translateY(80px)",
    opacity: mounted ? 1 : 0,
    transition: "transform 0.8s cubic-bezier(.25,0,.2,1), opacity 0.6s ease",
  });

  return (
    <section className="relative overflow-hidden">
      <div className="grid min-h-[calc(100vh-89px)] grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 px-6 py-16 md:px-16 overflow-hidden">

          <p style={slideIn(0)} className="font-heading text-sm uppercase tracking-[0.3em] text-accent">
            Welcome to my portfolio
          </p>

          <h1 style={slideIn(150)} className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl text-nowrap">
            {profile.name}
          </h1>

          <p style={slideIn(300)} className="text-2xl text-gray-300">
            I&apos;m <TypedRoles roles={profile.roles} />
          </p>

          <div style={slideIn(450)}>
            <SocialLinks variant="dark" />
          </div>

        </div>

        <div className="relative min-h-[360px] md:min-h-0">
          <img src={profile.photoHome} alt={profile.name} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent md:bg-gradient-to-r" />
        </div>
      </div>
    </section>
  );
}
