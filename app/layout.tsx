import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ThemeProvider } from "@/components/theme-provider";
import { Chatbot } from "@/components/ui/chatbot";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Vivek Ramesh Sonawale | Java Full Stack Developer",
  description: "Java Full-Stack Dev • Building clean backend systems & polished frontends",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://viveksonawale.github.io/",
    title: "Vivek Ramesh Sonawale | Java Full Stack Developer",
    description: "Java Full-Stack Dev • Building clean backend systems & polished frontends",
    siteName: "Vivek Ramesh Sonawale Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Ramesh Sonawale | Java Full Stack Developer",
    description: "Java Full-Stack Dev • Building clean backend systems & polished frontends",
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
          <SmoothScroll />
          {children}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
