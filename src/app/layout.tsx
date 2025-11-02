import Header from "@/components/Header";
import QueryProvider from "./QueryClientProvider";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "xmas app",
  icons: {
    icon: "/tucmclogo.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <QueryProvider>
          {/*           */}
          <Header />
          <main className="flex-1">{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
