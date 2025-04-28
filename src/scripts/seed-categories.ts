// TODO: create a script to seed the categories

import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Programming Languages",
  "Web Development",
  "Mobile Development",
  "Game Development",
  "Data Science & AI",
  "DevOps & Cloud",
  "Cybersecurity",
  "Blockchain",
  "Algorithms & Data Structures",
  "System Design",
  "Interview Prep",
  "Code Reviews",
  "Open Source",
  "Developer Tools",
  "Career Advice",
  "Tech News",
  "Tutorials & How-Tos",
  "Live Coding",
  "Conference Talks",
  "Podcasts & Interviews",
];

async function main() {
  console.log("Seeding categories...");
  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Programming videos related to ${name.toLowerCase()}`,
    }));
    await db.insert(categories).values(values);
    console.log("Categories seeded successfully");
  } catch (error) {
    console.error("Error seeding cats", error);
    process.exit(1);
  }
}

main();
