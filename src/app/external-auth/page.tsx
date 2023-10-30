"use client";

import { Auth, DataStore } from "aws-amplify";
import { useEffect, useLayoutEffect, useState } from "react";
import awsExports from "@/src/aws-exports";
import { Amplify } from "aws-amplify";
import { useSearchParams, useRouter } from "next/navigation"; 
import { User } from "@/src/models";
import React from "react";
import Link from "next/link";

if (typeof window !== "undefined") {
  awsExports.oauth['redirectSignIn'] = `${window.location.origin}/external-auth`
  awsExports.oauth['redirectSignOut'] = `${window.location.origin}/`
}
Amplify.configure({ ...awsExports, ssr: true });
export default function Page() {
  const router = useRouter()
  const params = useSearchParams()
  if(params.has('error')){
    console.log("email exists")
    return (
      <main className="min-h-screen items-center justify-between p-24"> 
        <div className="mb-8">Email already in use</div>

        Please <Link href={'/Login'} className="text-green-500">login</Link> with email and password or <Link href={'/Register'} className="text-green-500">Create</Link> a new account with a different email
        
      </main>
    );
  }else {
  useEffect(()=>{
    const getUser = () =>{
      Auth.currentAuthenticatedUser().then(async data=>{
        const userData = {
          firstName: data.attributes.family_name?data.attributes.family_name:'',
          lastName: data.attributes.given_name?data.attributes.given_name:'',
          email: data.attributes.email,
          phone: data.attributes.phone_number,
          sub: data.attributes.sub,
          isActive: true,
          address: ''
        }
        DataStore.observeQuery(User).subscribe(async (event)=>{
          if(event.isSynced){
            await DataStore.query(User,(user)=>user.email.eq(data.attributes.email)).then(async data=>{
              console.log(data)
              if(data.length === 0){
                await DataStore.save(new User(userData)).then(data=>{
                  router.replace('/products')
                })
              }else{
                router.replace('/')
              }
            })
          }
        })
        
       })
    }
  return () => getUser()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
      Collecting your data. Please be patient
    </main>
  );
  }
}
