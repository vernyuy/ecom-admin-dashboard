"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { Amplify } from "aws-amplify";
import awsExports from "@/src/aws-exports";
// import config '@/src/amplifyconfiguration.json';
import { use, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import storeService from "./feature/store/storeService";
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
  const [theme, settheme]: any[] = useState([]);

  const themeData = async () => {
    const response = await storeService.listTheme();
    settheme(response);
    console.log(theme);
  };
  useEffect(() => {
    setMounted(true);
    themeData();
  }, []);

  if (!mounted) {
    return <Provider store={store}>{children}</Provider>;
  }
  return (
    <ThemeProvider attribute="class">
      <style
        dangerouslySetInnerHTML={{
          __html: ` :root {
                             --main-color: ${theme[0]?.mainColor};
                             --primary-color: ${theme[0]?.primaryColor};
                             --secondary-color: ${theme[0]?.secondaryColor};
                           }`,
        }}
      />{" "}
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
