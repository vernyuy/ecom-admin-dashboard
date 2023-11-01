import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "../redux-store/providers";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin", "greek"] });
export const metadata: Metadata = {
  title: "Commerce",
  description: "ro-groups",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* className={inter.className} */}
      <body className="fon font-sans">
        <>
          <Providers>{children}</Providers>
        </>
      </body>
    </html>
  );
}
