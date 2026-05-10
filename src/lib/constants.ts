export const MEMBERSHIP_TIERS = {
  associate: {
    label: "Associate",
    level: 1,
    color: "bg-blue-100 text-blue-800",
    description: "Entry-level membership with access to basic resources",
  },
  member: {
    label: "Member",
    level: 2,
    color: "bg-rmf-gold/20 text-rmf-navy",
    description: "Full membership with access to all standard content",
  },
  fellow: {
    label: "Fellow",
    level: 3,
    color: "bg-rmf-mint/20 text-rmf-navy",
    description:
      "Premium membership with access to all content and priority sessions",
  },
} as const;

export const ROLES = {
  member: { label: "Member", description: "Portal access only" },
  board: { label: "Board Member", description: "Portal + Board dashboard" },
  admin: { label: "Administrator", description: "Full system access" },
} as const;

export const APPLICATION_STATUSES = {
  new: { label: "New", color: "bg-blue-100 text-blue-800" },
  reviewing: {
    label: "Under Review",
    color: "bg-yellow-100 text-yellow-800",
  },
  approved: { label: "Approved", color: "bg-green-100 text-green-800" },
  declined: { label: "Declined", color: "bg-red-100 text-red-800" },
} as const;

export const SPECIALTIES = [
  "Regenerative Medicine",
  "Stem Cell Therapy",
  "Anti-Aging Medicine",
  "Functional Medicine",
  "Aesthetic Medicine",
  "Orthopedic Regenerative Medicine",
  "Pain Management",
  "Sports Medicine",
  "Dermatology",
  "Cardiology",
  "Neurology",
  "Oncology",
  "General Practice",
  "Other",
] as const;

export const COUNTRIES = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Bahrain",
  "Kuwait",
  "Oman",
  "United Kingdom",
  "United States",
  "Germany",
  "India",
  "Other",
] as const;

export const CONTENT_CATEGORIES = [
  "Stem Cell Therapy",
  "Exosome Therapy",
  "PRP Treatment",
  "Gene Therapy",
  "Tissue Engineering",
  "Clinical Protocols",
  "Research Papers",
  "Case Studies",
  "Training Materials",
  "Webinar Recordings",
] as const;
