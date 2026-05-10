import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      membershipTier: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: string;
    membershipTier: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string;
    membershipTier: string;
  }
}
