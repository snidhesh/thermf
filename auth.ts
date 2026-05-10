import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";
import Resend from "next-auth/providers/resend";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./src/db/schema";
import authConfig from "./auth.config";

function createDb() {
  const sql = neon(process.env.DATABASE_URL!);
  return drizzle({ client: sql, schema });
}

let _nextAuth: ReturnType<typeof NextAuth> | null = null;

function getNextAuth() {
  if (!_nextAuth) {
    const db = createDb();

    const config: NextAuthConfig = {
      adapter: DrizzleAdapter(db, {
        usersTable: schema.users,
        accountsTable: schema.accounts,
        verificationTokensTable: schema.verificationTokens,
      }),
      session: { strategy: "jwt" },
      ...authConfig,
      providers: [
        Resend({
          from: process.env.EMAIL_FROM || "RMF <noreply@thermf.org>",
        }),
      ],
      callbacks: {
        ...authConfig.callbacks,
        async jwt({ token, user }) {
          if (user) {
            token.role = (user as { role?: string }).role ?? "member";
            token.membershipTier = (user as { membershipTier?: string }).membershipTier ?? "associate";
          }
          return token;
        },
        async session({ session, token }: { session: Session; token: JWT }) {
          if (session.user) {
            session.user.id = token.sub!;
            session.user.role = token.role as string;
            session.user.membershipTier = token.membershipTier as string;
          }
          return session;
        },
      },
    };

    _nextAuth = NextAuth(config);
  }
  return _nextAuth;
}

export const handlers = {
  GET: (...args: unknown[]) => (getNextAuth().handlers.GET as Function)(...args),
  POST: (...args: unknown[]) => (getNextAuth().handlers.POST as Function)(...args),
};

export function auth(...args: unknown[]) {
  return (getNextAuth().auth as Function)(...args);
}

export function signIn(...args: unknown[]) {
  return (getNextAuth().signIn as Function)(...args);
}

export function signOut(...args: unknown[]) {
  return (getNextAuth().signOut as Function)(...args);
}
