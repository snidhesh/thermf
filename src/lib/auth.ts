import { auth } from "../../auth";
import { redirect } from "next/navigation";

export async function getCurrentUser() {
  const session = await auth();
  return session?.user ?? null;
}

export async function requireAuth() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }
  return user;
}

export async function requireRole(role: string | string[]) {
  const user = await requireAuth();
  const roles = Array.isArray(role) ? role : [role];
  if (!roles.includes(user.role)) {
    redirect("/portal/dashboard");
  }
  return user;
}

export async function requireTier(minTier: string) {
  const user = await requireAuth();
  const TIER_LEVEL: Record<string, number> = { associate: 1, member: 2, fellow: 3 };
  if ((TIER_LEVEL[user.membershipTier] ?? 0) < (TIER_LEVEL[minTier] ?? 0)) {
    redirect("/portal/dashboard");
  }
  return user;
}
