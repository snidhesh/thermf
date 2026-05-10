import { sql } from "drizzle-orm";
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { users } from "./users";

/* ------------------------------------------------------------------ */
/*  Enums                                                              */
/* ------------------------------------------------------------------ */

export const bookingStatusEnum = pgEnum("booking_status", [
  "confirmed",
  "cancelled",
  "completed",
  "no_show",
]);

/* ------------------------------------------------------------------ */
/*  Session slots table                                                */
/* ------------------------------------------------------------------ */

export const sessionSlots = pgTable("session_slots", {
  id: uuid("id").primaryKey().defaultRandom(),
  boardMemberId: uuid("board_member_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  startsAt: timestamp("starts_at", { withTimezone: true }).notNull(),
  endsAt: timestamp("ends_at", { withTimezone: true }).notNull(),
  timezone: varchar("timezone", { length: 100 }).notNull().default("UTC"),
  durationMinutes: integer("duration_minutes").notNull(),
  totalSpots: integer("total_spots").notNull().default(1),
  bookedSpots: integer("booked_spots").notNull().default(0),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

/* ------------------------------------------------------------------ */
/*  Bookings table                                                     */
/* ------------------------------------------------------------------ */

export const bookings = pgTable(
  "bookings",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    slotId: uuid("slot_id")
      .notNull()
      .references(() => sessionSlots.id, { onDelete: "cascade" }),
    memberId: uuid("member_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    status: bookingStatusEnum("status").notNull().default("confirmed"),
    topic: text("topic"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => [
    uniqueIndex("unique_confirmed_booking")
      .on(table.slotId, table.memberId)
      .where(sql`${table.status} = 'confirmed'`),
  ]
);
