import {
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { users } from "./users";

/* ------------------------------------------------------------------ */
/*  Enums                                                              */
/* ------------------------------------------------------------------ */

export const applicationStatusEnum = pgEnum("application_status", [
  "new",
  "reviewing",
  "approved",
  "declined",
]);

/* ------------------------------------------------------------------ */
/*  Applications table                                                 */
/* ------------------------------------------------------------------ */

export const applications = pgTable("applications", {
  id: uuid("id").primaryKey().defaultRandom(),
  referenceNumber: varchar("reference_number", { length: 24 })
    .notNull()
    .unique(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  specialty: varchar("specialty", { length: 255 }).notNull(),
  country: varchar("country", { length: 100 }).notNull(),
  city: varchar("city", { length: 100 }),
  yearsExperience: integer("years_experience").notNull(),
  qualifications: text("qualifications").notNull(),
  motivation: text("motivation").notNull(),
  status: applicationStatusEnum("status").notNull().default("new"),
  reviewedBy: uuid("reviewed_by").references(() => users.id, {
    onDelete: "set null",
  }),
  reviewNotes: text("review_notes"),
  submittedAt: timestamp("submitted_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  reviewedAt: timestamp("reviewed_at", { withTimezone: true }),
});
