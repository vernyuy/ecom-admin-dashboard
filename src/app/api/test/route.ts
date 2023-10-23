
import { NextRequest, NextResponse } from "next/server";
import { Amplify, Auth, withSSRContext } from "aws-amplify";
import awsExports from "@/src/aws-exports";
import { useDispatch, useSelector } from "react-redux";
// Amplify.configure({...awsExports, ssr: true})

export async function GET(request: NextRequest){
    
    try{
        const ts = withSSRContext()
        const test = await ts.Auth.currentAuthenticatedUser()
        return NextResponse.json({
            'test': test
        })
    }catch(error){
        console.log(error)
        return NextResponse.json({
            'error':error
        })
    }
    
}