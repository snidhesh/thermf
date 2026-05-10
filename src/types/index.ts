export type Role = "member" | "board" | "admin";
export type MembershipTier = "associate" | "member" | "fellow";
export type ApplicationStatus = "new" | "reviewing" | "approved" | "declined";
export type ContentType = "video" | "pdf" | "protocol" | "template";
export type ContentStatus = "draft" | "review" | "published" | "archived";
export type AssetProvider = "blob" | "mux" | "cloudflare_stream";
export type BookingStatus =
  | "confirmed"
  | "cancelled"
  | "completed"
  | "no_show";

export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  badge?: string;
  children?: NavItem[];
}

export interface StatCardData {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: string;
}
