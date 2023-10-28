import { NextResponse } from 'next/server'
import { validateCurrentUser } from './utils'
import type { NextRequest } from 'next/server'


export async function middleware(request: NextRequest) {
    const headerCookies = request.headers.get("cookie")?.split(';')
    let cognitoCookies = []
    for(let cookie of headerCookies?headerCookies:[]){
        // console.log(cookie)
        // console.log('')
        if(cookie.includes('CognitoIdentityServiceProvider')){
            cognitoCookies.push(cookie)
            
        // console.log('')
        // console.log('')
        //     console.log(cognitoCookies)
        }
    }
    // console.log(request.nextUrl.pathname)
    // console.log(cognitoCookies.length)

    if(cognitoCookies.length>0 && !request.nextUrl.pathname.includes('/login')){
        // console.log(cognitoCookies.length>0 && request.nextUrl.pathname !== '/login')
        // console.log("mdw")
        return NextResponse.next()
    }
    if(cognitoCookies.length === 0 && request.nextUrl.pathname === '/'){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if(cognitoCookies.length === 0 && request.nextUrl.pathname === '/categories'){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if(cognitoCookies.length === 0 && request.nextUrl.pathname === '/add-product'){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if(cognitoCookies.length === 0 && request.nextUrl.pathname === '/users'){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if(cognitoCookies.length === 0 && request.nextUrl.pathname === '/products'){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    
    if(cognitoCookies.length === 0 && request.nextUrl.pathname === '/add-category'){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    
    if(cognitoCookies.length === 0 && request.nextUrl.pathname.startsWith('/update-product/')){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    if(cognitoCookies.length === 0 && request.nextUrl.pathname.includes('/login')){
        return NextResponse.next()
    }
    if(cognitoCookies.length > 0 && request.nextUrl.pathname.includes('/login')){
        console.log('am here')
        return NextResponse.redirect(new URL('/', request.url))
    }
    if(request.nextUrl.pathname.includes('EMAIL_ALREADY_IN_USE')){
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
        '/add-category',
        '/login'
    ],
  }