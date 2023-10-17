"use client";

import { Auth } from "aws-amplify";
import { useEffect, useLayoutEffect } from "react";
import awsExports from "@/src/aws-exports";
import { Amplify } from "aws-amplify";
import { useRouter } from "next/navigation";
Amplify.configure({ ...awsExports, ssr: true });

export default function Home() {
  const router = useRouter()
  Auth.currentAuthenticatedUser()
  useLayoutEffect(()=>{
   Auth.currentAuthenticatedUser().then(data=>{
    console.log(data)
    // router.replace('/')
   })
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"> Welcome</main>
  );
}
