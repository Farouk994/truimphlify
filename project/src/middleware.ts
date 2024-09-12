import { authMiddleware } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export default authMiddleware({
  publicRoutes: ['/', '/auth(.*)', '/portal(.*)', '/images(.*)'],
  afterAuth: (auth, req) => auth.isPublicRoute ? NextResponse.next() : undefined,
  // async afterAuth(auth, req) {
  //   if(auth.isPublicRoute){
  //     return NextResponse.next();
  //   }
  //   const url= new URL(req.nextUrl.origin);

  //   if(!auth.userId){
  //     url.pathname = '/sign-up';
  //     return NextResponse.redirect(url)
  //   }
  //   // console.log("afterAuth", auth)
  // },,
  ignoredRoutes: ['/chatbot'],
})

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}