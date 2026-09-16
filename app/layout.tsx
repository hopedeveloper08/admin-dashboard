import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "داشبورد مدیریت",
  description: "داشبورد مدیریت ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      data-theme="hope-light"
      className={`${vazirmatn.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
