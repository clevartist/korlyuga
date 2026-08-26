"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavLayout from "./nav-layout.json";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Get the current section from the pathname
  const currentSection = pathname.split("/").pop() || "";

  // Check if section exists in NavLayout
  const sectionData = NavLayout[currentSection as keyof typeof NavLayout];

  // If section doesn't exist, show 404
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

  // Reset index when section changes
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

  // Helper function to check if file is video
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
          <img
            src={mediaURL}
            alt={sectionName}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div>{children}</div>
    </main>
  );
}
