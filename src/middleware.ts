// import { runWithAmplifyServerContext } from '@aws-amplify/adapter-nextjs';
// import { fetchAuthSession } from 'aws-amplify/auth/server';
import { Amplify, withSSRContext, Auth } from "aws-amplify";
import awsExports from "@/src/aws-exports"
import { NextRequest, NextResponse } from 'next/server';

Amplify.configure({...awsExports, ssr:true})
export async function middleware(request: NextRequest) {
  // const ssr = withSSRContext(request)
  // const test = await Auth.currentAuthenticatedUser()
  const response = NextResponse.next();
console.log("hellooo")
  // const authenticated = await runWithAmplifyServerContext({
  //   nextServerContext: { request, response },
  //   operation: async (contextSpec: any) => {
  //     try {
  //       const session = await fetchAuthSession(contextSpec, {});
  //       return session.tokens !== undefined;
  //     } catch (error) {
  //       console.log(error);
  //       return false;
  //     }
  //   },
  // });

  // if (authenticated) {
  //   return response;
  // }

  // return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sign-in).*)',
  ],
};