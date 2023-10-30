// "use client";

import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Amplify, withSSRContext } from "aws-amplify";
import awsExports from "../aws-exports";
import { Providers } from "../redux-store/providers";
import { store } from "../redux-store/store";

// if (typeof window !== "undefined") {
//   awsExports.oauth['redirectSignIn'] = `${window.location.origin}/external-auth`
//   awsExports.oauth['redirectSignOut'] = `${window.location.origin}/`
// }
Amplify.configure({ ...awsExports, ssr: true });

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
        <Providers store={store}>{children}</Providers>
      </body>
    </html>
  );
}
