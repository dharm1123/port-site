import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dharm Dudhagara | AI/ML Engineer & Data Scientist",
  description:
    "AI/ML Enthusiast and MSc Data Science graduate with expertise in Machine Learning, Deep Learning, Generative AI, and Multi-agent LLM systems.",
  keywords: [
    "AI",
    "ML",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Generative AI",
    "Python",
    "TensorFlow",
    "PyTorch",
    "NLP",
    "Computer Vision",
  ],
  authors: [{ name: "Dharm Dudhagara" }],
  openGraph: {
    title: "Dharm Dudhagara | AI/ML Engineer & Data Scientist",
    description:
      "AI/ML Enthusiast with expertise in Machine Learning, Deep Learning, and Generative AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
