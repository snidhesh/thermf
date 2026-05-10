import { z } from "zod";

export const contentItemSchema = z.object({
  type: z.enum(["video", "pdf", "protocol", "template"]),
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  category: z.string().min(1, "Please select a category"),
  minTier: z.enum(["associate", "member", "fellow"]),
  status: z
    .enum(["draft", "review", "published", "archived"])
    .optional(),
});

export type ContentItemFormData = z.infer<typeof contentItemSchema>;
