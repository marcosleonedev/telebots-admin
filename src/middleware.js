import { jwtDecode } from 'jwt-decode'
import { NextResponse } from 'next/server'

const publicRoutes = [
    { path: '/', whenAuthenticated: 'redirect' },
    { path: '/register', whenAuthenticated: 'redirect' }
]

const REDIRECT_WHEN_NOT_AUTHENTICATE_ROUTE = '/'
const REDIRECT_WHEN_AUTHENTICATE_ROUTE = '/users'

export function middleware(request) {

    const path = request.nextUrl.pathname
    const publicRoute = publicRoutes.find(route => route.path === path)
    const authToken = request.cookies.get('token')

    if(!authToken && publicRoute){
        return NextResponse.next()
    }

    if(!authToken && !publicRoute){
        const redirectUrl = request.nextUrl.clone()
        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATE_ROUTE
        return NextResponse.redirect(redirectUrl)
    }

    if(authToken && publicRoute && publicRoute.whenAuthenticated == 'redirect' && jwtDecode(authToken.value).role != 'ADMIN'){
        return NextResponse.next()
    }

    if(authToken && !publicRoute && jwtDecode(authToken.value).role != 'ADMIN'){
        const redirectUrl = request.nextUrl.clone()
        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATE_ROUTE
        return NextResponse.redirect(redirectUrl)
    }

    if(authToken && publicRoute && publicRoute.whenAuthenticated == 'redirect' && jwtDecode(authToken.value).role == 'ADMIN'){
        const redirectUrl = request.nextUrl.clone()
        redirectUrl.pathname = REDIRECT_WHEN_AUTHENTICATE_ROUTE
        return NextResponse.redirect(redirectUrl)
    }

    if(authToken && !publicRoute && jwtDecode(authToken.value).role == 'ADMIN'){
        return NextResponse.next()
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ]
}