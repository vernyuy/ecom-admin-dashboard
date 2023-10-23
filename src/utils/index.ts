"use client"
import { Amplify, withSSRContext, Auth } from 'aws-amplify';
import { headers } from 'next/headers';
import awsExports from '@/src/aws-exports';
import { NextRequest } from 'next/server';
import dynamic from 'next/dynamic';

Amplify.configure({ ...awsExports, ssr: true });

export const  validateCurrentUser = (req: any ) => {
    // console.log()
    // window.location.href = '/';
    // try{
    //     const res = withSSRContext(req).Auth.currentAuthenticatedUser()
    //     console.log("Response:", res)
    //     // SSR.Auth.currentAuthenticatedUser()
    // }catch(err){
    //     console.log("Auth error: ",err)
    // }

    if (typeof window !== 'undefined') {
        // 👉️ can use window here
        console.log('You are on the browser')
      
        console.log(window.location.href);
      
        console.log(window.location.protocol);
      }
      
}
