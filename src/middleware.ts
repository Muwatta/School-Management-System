import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const customToken = request.cookies.get('auth-token');
  const nextAuthToken = request.cookies.get('next-auth.session-token') || request.cookies.get('__Secure-next-auth.session-token');
  if (
    !customToken && !nextAuthToken &&
    (request.nextUrl.pathname.startsWith('/dashboard') ||
      request.nextUrl.pathname.startsWith('/admin'))
  ) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};