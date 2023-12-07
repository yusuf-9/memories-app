import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Providers and contexts
import { ThemeProvider } from "@/components/wrappers/theme-provider";
import ModalProvider from "@/contexts/modal";

//  global components
import GlobalModal from "@/components/modals";

// css
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memories • Home",
  description: "Home page for the memories app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="theme-mode">
            <ModalProvider>
              {children}
              <GlobalModal />
            </ModalProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
