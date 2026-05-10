import { relations } from "drizzle-orm";
import { users } from "./users";
import { accounts } from "./auth";
import { applications } from "./applications";
import { contentItems, contentAssets } from "./content";
import { sessionSlots, bookings } from "./sessions";
import { activityLog } from "./activity-log";
import { leads } from "./leads";

/* ------------------------------------------------------------------ */
/*  Users relations                                                    */
/* ------------------------------------------------------------------ */

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  reviewedApplications: many(applications, {
    relationName: "reviewer",
  }),
  uploadedContent: many(contentItems, {
    relationName: "uploader",
  }),
  sessionSlots: many(sessionSlots, {
    relationName: "boardMember",
  }),
  bookings: many(bookings, {
    relationName: "bookedMember",
  }),
  activityLogs: many(activityLog),
}));

/* ------------------------------------------------------------------ */
/*  Accounts relations                                                 */
/* ------------------------------------------------------------------ */

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));

/* ------------------------------------------------------------------ */
/*  Applications relations                                             */
/* ------------------------------------------------------------------ */

export const applicationsRelations = relations(applications, ({ one }) => ({
  reviewer: one(users, {
    fields: [applications.reviewedBy],
    references: [users.id],
    relationName: "reviewer",
  }),
}));

/* ------------------------------------------------------------------ */
/*  Content relations                                                  */
/* ------------------------------------------------------------------ */

export const contentItemsRelations = relations(
  contentItems,
  ({ one, many }) => ({
    uploader: one(users, {
      fields: [contentItems.uploadedBy],
      references: [users.id],
      relationName: "uploader",
    }),
    parent: one(contentItems, {
      fields: [contentItems.parentId],
      references: [contentItems.id],
      relationName: "versions",
    }),
    versions: many(contentItems, {
      relationName: "versions",
    }),
    assets: many(contentAssets),
  })
);

export const contentAssetsRelations = relations(contentAssets, ({ one }) => ({
  contentItem: one(contentItems, {
    fields: [contentAssets.contentItemId],
    references: [contentItems.id],
  }),
}));

/* ------------------------------------------------------------------ */
/*  Session relations                                                  */
/* ------------------------------------------------------------------ */

export const sessionSlotsRelations = relations(
  sessionSlots,
  ({ one, many }) => ({
    boardMember: one(users, {
      fields: [sessionSlots.boardMemberId],
      references: [users.id],
      relationName: "boardMember",
    }),
    bookings: many(bookings),
  })
);

export const bookingsRelations = relations(bookings, ({ one }) => ({
  slot: one(sessionSlots, {
    fields: [bookings.slotId],
    references: [sessionSlots.id],
  }),
  member: one(users, {
    fields: [bookings.memberId],
    references: [users.id],
    relationName: "bookedMember",
  }),
}));

/* ------------------------------------------------------------------ */
/*  Activity log relations                                             */
/* ------------------------------------------------------------------ */

export const activityLogRelations = relations(activityLog, ({ one }) => ({
  user: one(users, {
    fields: [activityLog.userId],
    references: [users.id],
  }),
}));

/* ------------------------------------------------------------------ */
/*  Leads relations                                                    */
/* ------------------------------------------------------------------ */

export const leadsRelations = relations(leads, ({ one }) => ({
  convertedApplication: one(applications, {
    fields: [leads.convertedApplicationId],
    references: [applications.id],
  }),
}));
