import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/tutorial/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashBoard = nextUrl.pathname.startsWith('/tutorial');
      if(isOnDashBoard) {
        if(isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      //  else if (isLoggedIn) {
      //   return Response.redirect(new URL('/tutorial/dashboard', nextUrl))
      // }
      return true;
    },
  },
  providers: [],  // Add providers with an empty array for now
} satisfies NextAuthConfig;;
