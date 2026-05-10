import { z } from "zod";

export const applicationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  specialty: z.string().min(1, "Please select a specialty"),
  country: z.string().min(1, "Please select a country"),
  city: z.string().min(2, "City must be at least 2 characters"),
  yearsExperience: z.coerce.number().min(0).max(60),
  qualifications: z.string().min(10, "Please provide your qualifications"),
  motivation: z
    .string()
    .min(20, "Please explain your motivation for joining"),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;
