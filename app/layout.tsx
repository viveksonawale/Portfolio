import type { Metadata, Viewport } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimationProvider } from "@/components/providers/AnimationProvider";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair"
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "portfolio",
    template: "%s | Vivek Ramesh Sonawale",
  },
  description: "Java Full-Stack Dev • Building clean backend systems & polished frontends. Expert in Java, Spring Boot, React, and Next.js.",
  keywords: ["Vivek Sonawale", "Java Developer", "Full Stack Developer", "Spring Boot", "React", "Next.js", "Portfolio", "Software Engineer"],
  authors: [{ name: "Vivek Ramesh Sonawale", url: "https://viveksonawale.github.io/" }],
  creator: "Vivek Ramesh Sonawale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://viveksonawale.github.io/",
    title: "portfolio",
    description: "Java Full-Stack Dev • Building clean backend systems & polished frontends. Explore my projects and skills.",
    siteName: "portfolio",
    images: [
      {
        url: "/me-1.jpg", // Assuming this is a good representative image, or use a specific OG image if available
        width: 1200,
        height: 630,
        alt: "Vivek Ramesh Sonawale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Ramesh Sonawale | Java Full Stack Developer",
    description: "Java Full-Stack Dev • Building clean backend systems & polished frontends.",
    images: ["/me-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          inter.variable,
          libreBaskerville.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimationProvider>
            <SmoothScroll />
            <Header />
            {children}
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
