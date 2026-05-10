import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

/* ------------------------------------------------------------------ */
/*  Enums                                                              */
/* ------------------------------------------------------------------ */

export const roleEnum = pgEnum("role", ["member", "board", "admin"]);

export const membershipTierEnum = pgEnum("membership_tier", [
  "associate",
  "member",
  "fellow",
]);

/* ------------------------------------------------------------------ */
/*  Users table                                                        */
/* ------------------------------------------------------------------ */

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  image: text("image"),
  emailVerified: timestamp("email_verified", { withTimezone: true }),
  role: roleEnum("role").notNull().default("member"),
  membershipTier: membershipTierEnum("membership_tier"),
  specialty: varchar("specialty", { length: 255 }),
  country: varchar("country", { length: 100 }),
  city: varchar("city", { length: 100 }),
  phone: varchar("phone", { length: 50 }),
  bio: text("bio"),
  yearsExperience: integer("years_experience"),
  sessionsAllowed: integer("sessions_allowed").notNull().default(0),
  sessionsUsed: integer("sessions_used").notNull().default(0),
  memberSince: timestamp("member_since", { withTimezone: true }),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});
