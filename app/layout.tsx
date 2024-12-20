import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { ThemeProvider } from "@/app/components/ThemeProvider";
import Navigation from "@/app/components/Navigation";
import HoverMenu from "./components/cardtri";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Mahamane Lawaly hassane",
  description:
    "Developpeur passionné par les technologies web et les applications mobiles.",
  openGraph: {
    title: "Mahamane Lawaly hassane",
    url: "https://m-l-h.netlify.app/",
    images: [{ url: "", alt: "" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body className="width-full bg-contrast text-primary antialiased">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {/* <Navigation /> */}
           
  
<HoverMenu />
           
            <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
  );
}
