import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "../redux-store/providers";
import "instantsearch.css/themes/satellite-min.css";
import ThemeSwitcher from "../components/ThemeSwitcher";

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
    <html lang="en" className={""}>
      <body className="fon font-sans">
        <>
          <Providers>{children}</Providers>
        </>
      </body>
    </html>
  );
}
