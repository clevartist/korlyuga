"use client";

import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import SideBar from "./components/SideBar";

export default function RootLayout({ children }: LayoutProps<"/">) {
  const [sideBarToggle, setSideBarToggle] = useState(false);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (sideBarToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideBarToggle]);

  return (
    <html lang="ru" className="scroll-smooth md:scroll-auto overflow-x-hidden">
      <body className="overflow-x-hidden">
        {/* menu dropdown */}
        <input
          className="text-white absolute right-0 z-101 w-8 object-contain mt-4 mr-4 cursor-pointer"
          type="image"
          src="/icons/hamburger_menu.svg"
          onClick={() => setSideBarToggle(!sideBarToggle)}
          alt="Menu"
        />

        <Header />

        {/* Backdrop - always rendered but with opacity transition */}
        <div
          className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
            sideBarToggle
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSideBarToggle(false)}
        />

        {/* Sidebar with slide animation */}
        <div
          className={`fixed right-0 h-screen w-screen md:w-1/3 z-100 transition-transform duration-300 ease-in-out ${
            sideBarToggle ? "translate-x-0" : "translate-x-full"
          }`}
          id="liquid-glass-sidebar"
        >
          <SideBar />
        </div>

        {/* content */}
        <SmoothScroll>{children}</SmoothScroll>

        <svg className="hidden" xmlns="http://www.w3.org/2000/svg">
          <filter id="glass-blur">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.003 0.007"
              numOctaves="1"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="200"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
      </body>
    </html>
  );
}
