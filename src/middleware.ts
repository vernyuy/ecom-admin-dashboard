import { NextResponse } from 'next/server'
import { validateCurrentUser } from './utils'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const headerCookies = request.headers.get("cookie")
    if(headerCookies){
        console.log("mdw")
        return NextResponse.next()
    }
    else if(!headerCookies){
        // return NextResponse.redirect(new URL('/login', request.url))
    }
    else if(request.nextUrl.pathname.includes('EMAIL_ALREADY_IN_USE')){
        console.log('test')
    }
}

export const config = {
    matcher: [
        '/',
        '/categories', 
        '/add-product', 
        '/update-product/:path*', 
        '/users', 
        '/products',
        '/external-auth/:path*'
    ],
  }