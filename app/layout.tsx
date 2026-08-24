import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Портфолио",
  description: "Всё про меня",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
