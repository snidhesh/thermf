import {
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { applications } from "./applications";

/* ------------------------------------------------------------------ */
/*  Enums                                                              */
/* ------------------------------------------------------------------ */

export const leadStatusEnum = pgEnum("lead_status", [
  "new",
  "contacted",
  "converted",
  "closed",
]);

/* ------------------------------------------------------------------ */
/*  Leads table                                                        */
/* ------------------------------------------------------------------ */

export const leads = pgTable("leads", {
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
  status: leadStatusEnum("status").notNull().default("new"),
  source: varchar("source", { length: 100 }).notNull().default("website_homepage"),
  submittedAt: timestamp("submitted_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  notes: text("notes"),
  convertedApplicationId: uuid("converted_application_id").references(
    () => applications.id,
    { onDelete: "set null" }
  ),
});
