import { z } from "zod";

export const sessionSlotSchema = z.object({
  startsAt: z.string().datetime(),
  endsAt: z.string().datetime(),
  timezone: z.string().default("UTC"),
  durationMinutes: z.coerce.number().min(15).max(120),
  totalSpots: z.coerce.number().min(1).max(20),
});

export const bookingSchema = z.object({
  slotId: z.string().uuid(),
  topic: z.string().optional(),
});

export type SessionSlotFormData = z.infer<typeof sessionSlotSchema>;
export type BookingFormData = z.infer<typeof bookingSchema>;
