"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white font-heading font-bold text-bg">
            {site.name.charAt(0)}
          </span>
          <span className="font-heading text-xl font-bold">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 text-sm font-medium transition-colors ${
                  active ? "text-accent" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
                {active && <span className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-accent" />}
              </Link>
            );
          })}
        </nav>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-white/5 px-6 py-6 md:hidden">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium ${active ? "text-accent" : "text-gray-300"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
