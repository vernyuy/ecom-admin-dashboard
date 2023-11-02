import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "../redux-store/providers";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
    <html lang="en" className={poppins.className}>
      <body className="fon font-sans">
        <>
          <Providers>{children}</Providers>
        </>
      </body>
    </html>
  );
}
