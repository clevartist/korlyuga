"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change background after scrolling 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray backdrop-blur-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.15),0_0_12px_rgba(0,0,0,0.08)] border border-[#3a362d73]/20"
          : "bg-transparent"
      }`}
    >
      <div className="flex flex-row items-center justify-center container mx-auto px-4 py-4 gap-8 relative font-gazeta">
        {/* Left group */}
        <div className="hidden lg:flex text-white gap-8">
          <Link className="cursor-pointer" href="/nav/photography">
            Фотография
          </Link>
          <Link className="cursor-pointer" href="/nav/videography">
            Видеография
          </Link>
          <Link className="cursor-pointer" href="/nav/architecture">
            Архитектура
          </Link>
        </div>

        {/* Center image */}
        <Link href="/" className="hidden md:block">
          <img className="w-30 object-contain" src="/logo.png" />
        </Link>
        <Link href="/" className="absolute left-0 md:hidden mt-10 ml-8">
          <img className="w-30 object-contain" src="/logo.png" />
        </Link>

        {/* Right group */}
        <div className="hidden lg:flex text-white gap-8">
          <Link className="cursor-pointer" href="/nav/graphic-design">
            Граф. дизайн
          </Link>
          <Link className="cursor-pointer" href="/nav/programming">
            Программирование
          </Link>
          <Link className="cursor-pointer" href="/nav/contacts">
            Контакты
          </Link>
        </div>
      </div>
    </header>
  );
}
