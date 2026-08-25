"use client";

import { useState, useEffect } from "react";
import NavLayout from "./nav-layout.json";

export default function RootLayout({ children }: LayoutProps<"/">) {
  const previews = NavLayout.photography.previews;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % previews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [previews.length]);

  return (
    <main className="h-screen">
      <div className="flex h-3/4 items-center justify-center">
        <span className="absolute text-white font-gazeta text-6xl md:text-9xl">
          Фотография
        </span>
        <img
          src={previews[currentIndex].imageURL}
          alt="Preview"
          className="w-full h-full object-cover"
        />
      </div>
      <div>{children}</div>
    </main>
  );
}
