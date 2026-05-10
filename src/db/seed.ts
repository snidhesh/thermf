import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { nanoid } from "nanoid";
import * as schema from "./schema";

async function seed() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  const sql = neon(process.env.DATABASE_URL);
  const db = drizzle(sql, { schema });

  console.log("Seeding database...");

  // Create admin user
  const [admin] = await db
    .insert(schema.users)
    .values({
      name: "Admin User",
      email: "admin@thermf.org",
      role: "admin",
      membershipTier: "fellow",
      specialty: "Regenerative Medicine",
      country: "United Arab Emirates",
      city: "Dubai",
      isActive: true,
      sessionsAllowed: 99,
      memberSince: new Date("2024-01-01"),
    })
    .onConflictDoNothing()
    .returning();

  console.log("Created admin user:", admin?.email || "already exists");

  // Create board members
  const boardMembers = [
    {
      name: "Dr. Sarah Al-Rashid",
      email: "sarah@thermf.org",
      role: "board" as const,
      membershipTier: "fellow" as const,
      specialty: "Regenerative Medicine",
      country: "United Arab Emirates",
      city: "Dubai",
      bio: "Founding Chair of RMF with over 20 years of experience in regenerative medicine.",
      yearsExperience: 20,
      sessionsAllowed: 20,
      memberSince: new Date("2024-01-01"),
    },
    {
      name: "Prof. Michael Chen",
      email: "michael@thermf.org",
      role: "board" as const,
      membershipTier: "fellow" as const,
      specialty: "Stem Cell Therapy",
      country: "United Kingdom",
      city: "London",
      bio: "Vice Chair and leading researcher in stem cell therapy applications.",
      yearsExperience: 25,
      sessionsAllowed: 15,
      memberSince: new Date("2024-01-01"),
    },
    {
      name: "Dr. Fatima Hassan",
      email: "fatima@thermf.org",
      role: "board" as const,
      membershipTier: "fellow" as const,
      specialty: "Anti-Aging Medicine",
      country: "United Arab Emirates",
      city: "Abu Dhabi",
      bio: "Pioneer in anti-aging medicine and functional medicine approaches.",
      yearsExperience: 18,
      sessionsAllowed: 15,
      memberSince: new Date("2024-02-01"),
    },
  ];

  for (const member of boardMembers) {
    const [created] = await db
      .insert(schema.users)
      .values({ ...member, isActive: true })
      .onConflictDoNothing()
      .returning();
    console.log("Created board member:", created?.email || `${member.email} already exists`);
  }

  // Create sample members
  const members = [
    {
      name: "Dr. Ahmed Khan",
      email: "ahmed@example.com",
      role: "member" as const,
      membershipTier: "fellow" as const,
      specialty: "Stem Cell Therapy",
      country: "United Arab Emirates",
      city: "Dubai",
      yearsExperience: 15,
      sessionsAllowed: 10,
      memberSince: new Date("2024-03-15"),
    },
    {
      name: "Dr. Emily Rodriguez",
      email: "emily@example.com",
      role: "member" as const,
      membershipTier: "member" as const,
      specialty: "Regenerative Medicine",
      country: "United States",
      city: "Miami",
      yearsExperience: 12,
      sessionsAllowed: 5,
      memberSince: new Date("2024-06-01"),
    },
    {
      name: "Dr. Yuki Tanaka",
      email: "yuki@example.com",
      role: "member" as const,
      membershipTier: "fellow" as const,
      specialty: "Anti-Aging Medicine",
      country: "United Kingdom",
      city: "London",
      yearsExperience: 18,
      sessionsAllowed: 10,
      memberSince: new Date("2024-04-01"),
    },
    {
      name: "Dr. Priya Sharma",
      email: "priya@example.com",
      role: "member" as const,
      membershipTier: "member" as const,
      specialty: "Functional Medicine",
      country: "India",
      city: "Mumbai",
      yearsExperience: 10,
      sessionsAllowed: 5,
      memberSince: new Date("2024-09-01"),
    },
    {
      name: "Dr. Hans Mueller",
      email: "hans@example.com",
      role: "member" as const,
      membershipTier: "associate" as const,
      specialty: "Orthopedic Regenerative Medicine",
      country: "Germany",
      city: "Berlin",
      yearsExperience: 8,
      sessionsAllowed: 3,
      memberSince: new Date("2025-01-15"),
    },
  ];

  for (const member of members) {
    const [created] = await db
      .insert(schema.users)
      .values({ ...member, isActive: true })
      .onConflictDoNothing()
      .returning();
    console.log("Created member:", created?.email || `${member.email} already exists`);
  }

  // Create sample applications
  const applications = [
    {
      referenceNumber: nanoid(12),
      firstName: "Maria",
      lastName: "Santos",
      email: "maria@example.com",
      phone: "+55 11 99999-0000",
      specialty: "Stem Cell Therapy",
      country: "Brazil",
      city: "Sao Paulo",
      yearsExperience: 15,
      qualifications: "MD, PhD in Regenerative Medicine from University of Sao Paulo",
      motivation: "I am passionate about advancing regenerative medicine in Latin America.",
      status: "new" as const,
    },
    {
      referenceNumber: nanoid(12),
      firstName: "David",
      lastName: "Kim",
      email: "david@example.com",
      phone: "+82 10 1234 5678",
      specialty: "Anti-Aging Medicine",
      country: "South Korea",
      city: "Seoul",
      yearsExperience: 12,
      qualifications: "MD from Seoul National University, Board Certified in Dermatology",
      motivation: "Looking to collaborate with international experts in anti-aging therapies.",
      status: "reviewing" as const,
    },
  ];

  for (const app of applications) {
    const [created] = await db
      .insert(schema.applications)
      .values(app)
      .onConflictDoNothing()
      .returning();
    console.log("Created application:", created?.referenceNumber || "already exists");
  }

  console.log("Seeding complete!");
}

seed().catch(console.error);
