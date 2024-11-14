import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Anton_SC, Bitter, Inter, Noto_Sans_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/dark-mode/theme-provider";
import { Footer } from "@/components/layout/footer";

export const headerFont = Anton_SC({ weight: "400", subsets: ["latin"] });
export const interFont = Inter({ weight: "400", subsets: ["latin"] });
export const monoFont = Noto_Sans_Mono({ subsets: ["latin"] });
export const serifFont = Bitter({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Matt Welson",
  description: "A tech blog by a nerd, which I guess is redundant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} ${serifFont.variable} antialiased min-h-screen grid grid-rows-[auto_1fr_auto] gap-8`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
