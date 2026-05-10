import {
  boolean,
  integer,
  numeric,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { users, membershipTierEnum } from "./users";

/* ------------------------------------------------------------------ */
/*  Enums                                                              */
/* ------------------------------------------------------------------ */

export const contentTypeEnum = pgEnum("content_type", [
  "video",
  "pdf",
  "protocol",
  "template",
]);

export const contentStatusEnum = pgEnum("content_status", [
  "draft",
  "review",
  "published",
  "archived",
]);

export const assetProviderEnum = pgEnum("asset_provider", [
  "blob",
  "mux",
  "cloudflare_stream",
]);

/* ------------------------------------------------------------------ */
/*  Content items table                                                */
/* ------------------------------------------------------------------ */

export const contentItems = pgTable("content_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  type: contentTypeEnum("type").notNull(),
  title: varchar("title", { length: 500 }).notNull(),
  description: text("description"),
  category: varchar("category", { length: 255 }),
  minTier: membershipTierEnum("min_tier").notNull().default("associate"),
  status: contentStatusEnum("status").notNull().default("draft"),
  uploadedBy: uuid("uploaded_by")
    .notNull()
    .references(() => users.id, { onDelete: "restrict" }),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  version: integer("version").notNull().default(1),
  parentId: uuid("parent_id"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

/* ------------------------------------------------------------------ */
/*  Content assets table                                               */
/* ------------------------------------------------------------------ */

export const contentAssets = pgTable("content_assets", {
  id: uuid("id").primaryKey().defaultRandom(),
  contentItemId: uuid("content_item_id")
    .notNull()
    .references(() => contentItems.id, { onDelete: "cascade" }),
  provider: assetProviderEnum("provider").notNull().default("blob"),
  providerAssetId: varchar("provider_asset_id", { length: 500 }),
  playbackId: varchar("playback_id", { length: 500 }),
  blobUrl: text("blob_url"),
  fileType: varchar("file_type", { length: 100 }),
  fileSizeMb: numeric("file_size_mb"),
  duration: integer("duration"),
  pageCount: integer("page_count"),
  thumbnailUrl: text("thumbnail_url"),
  isPrivate: boolean("is_private").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
