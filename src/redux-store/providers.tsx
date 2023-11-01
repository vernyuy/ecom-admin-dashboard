"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { Amplify } from "aws-amplify";
import awsExports from "@/src/aws-exports";
if (typeof window !== 'undefined')
{
  awsExports.oauth["redirectSignIn"] = `${window.location.origin}/external-auth/`;
  awsExports.oauth["redirectSignOut"] = `${window.location.origin}/`;
  Amplify.configure({ ...awsExports, ssr: true });
}
if (typeof window === "undefined")
{
  Amplify.configure({ ...awsExports, ssr: true });
}
export function Providers({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
