"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/icon.png"
            alt="Promptly"
            width={34}
            height={34}
            className="rounded-[9px]"
          />
          <span className="font-bold text-lg text-gray-900 tracking-tight">
            Promptly
          </span>
        </Link>

        {/* CTA */}
        <a
          href="#waitlist"
          className="flex items-center gap-1.5 bg-brand-500 hover:bg-brand-600 active:scale-[0.97] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
