"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavLayout from "./nav-layout.json";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Find which known nav section this path belongs to,
  // by checking segments in order rather than just the last one
  const segments = pathname.split("/").filter(Boolean); // e.g. ["nav","photography","albums","wedding"]
  const currentSection = segments.find((seg) => seg in NavLayout) || "";

  const sectionData = NavLayout[currentSection as keyof typeof NavLayout];

  if (!sectionData) {
    return (
      <main className="h-screen flex items-center justify-center">
        <h1 className="text-4xl text-white">404 - Page Not Found</h1>
      </main>
    );
  }

  const previews = sectionData.previews;
  const sectionName = sectionData.name;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [currentSection]);

  useEffect(() => {
    if (previews.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % previews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [previews.length]);

  const isVideo = (url: string) => {
    const videoExtensions = [".mp4", ".mov", ".avi"];
    return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
  };

  const currentMedia = previews[currentIndex];
  const mediaURL = currentMedia?.imageURL;
  const isVideoFile = mediaURL ? isVideo(mediaURL) : false;

  return (
    <main>
      <div className="h-[75vh] flex items-center justify-center relative">
        <span className="absolute text-white font-gazeta text-6xl md:text-9xl z-10">
          {sectionName}
        </span>
        {isVideoFile ? (
          <video
            src={mediaURL}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={mediaURL}
            alt={sectionName}
            className="w-full h-full object-cover"
            width={3000}
            height={3000}
          />
        )}
      </div>
      <div>{children}</div>
    </main>
  );
}
