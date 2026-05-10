export const ROLE_PERMISSIONS = {
  member: [
    "view_tier_content",
    "book_sessions",
    "view_directory",
    "download_resources",
  ],
  board: [
    "view_tier_content",
    "book_sessions",
    "view_directory",
    "download_resources",
    "manage_own_sessions",
    "upload_content_for_review",
    "view_own_bookings",
  ],
  admin: [
    "view_tier_content",
    "book_sessions",
    "view_directory",
    "download_resources",
    "manage_own_sessions",
    "upload_content_for_review",
    "view_own_bookings",
    "manage_members",
    "manage_leads",
    "publish_content",
    "send_communications",
    "manage_events",
    "system_settings",
  ],
} as const;

export type Permission =
  (typeof ROLE_PERMISSIONS)[keyof typeof ROLE_PERMISSIONS][number];

export function hasPermission(role: string, permission: string): boolean {
  const permissions =
    ROLE_PERMISSIONS[role as keyof typeof ROLE_PERMISSIONS];
  if (!permissions) return false;
  return (permissions as readonly string[]).includes(permission);
}

const TIER_LEVEL: Record<string, number> = {
  associate: 1,
  member: 2,
  fellow: 3,
};

export function canAccessContent(
  userTier: string,
  contentMinTier: string
): boolean {
  return (TIER_LEVEL[userTier] ?? 0) >= (TIER_LEVEL[contentMinTier] ?? 0);
}

export function getTierLevel(tier: string): number {
  return TIER_LEVEL[tier] ?? 0;
}
