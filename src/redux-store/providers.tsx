"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { Amplify } from "aws-amplify";
import awsExports from "@/src/aws-exports";
import { use, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
if (typeof window !== "undefined") {
  awsExports.oauth[
    "redirectSignIn"
  ] = `${window.location.origin}/external-auth/`;
  awsExports.oauth["redirectSignOut"] = `${window.location.origin}/`;
  Amplify.configure({ ...awsExports, ssr: true });
}
if (typeof window === "undefined") {
  Amplify.configure({ ...awsExports, ssr: true });
}
export function Providers({ children }: any) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Provider store={store}>{children}</Provider>;
  }
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
