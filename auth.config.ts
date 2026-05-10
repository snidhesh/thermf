import type { NextAuthConfig } from "next-auth";

export default {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const pathname = nextUrl.pathname;

      // Public routes
      const publicRoutes = ["/", "/register", "/login", "/news"];
      const isPublicRoute = publicRoutes.some(
        (route) =>
          pathname === route ||
          pathname.startsWith("/news/") ||
          pathname.startsWith("/apply/") ||
          pathname.startsWith("/api/applications") ||
          pathname.startsWith("/api/auth")
      );

      if (isPublicRoute) return true;

      if (!isLoggedIn) return false;

      // Role-based route protection
      const role = auth?.user?.role;

      if (pathname.startsWith("/admin")) {
        return role === "admin";
      }

      if (pathname.startsWith("/board")) {
        return role === "board" || role === "admin";
      }

      if (pathname.startsWith("/portal")) {
        return true; // Any authenticated user
      }

      return true;
    },
  },
  providers: [], // Added in auth.ts
} satisfies NextAuthConfig;
