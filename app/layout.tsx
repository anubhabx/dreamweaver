import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { SparklesCore } from "@/components/ui/sparkles";

const font = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-IBM-Plex-Sans",
});

export const metadata: Metadata = {
  title: "Dreamweaver",
  description:
    "Dreamweaver is a text generation tool that uses GPT-3 to generate text based on a prompt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            `min-h-screen bg-background font-IBM-Plex-Sans antialiased`,
            font.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="w-full fixed inset-0 h-screen">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
              />
            </div>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
