import { db } from "@/db";
import { users } from "@/db/schema";

const seedUser = async () => {
  await db.insert(users).values({
    name: "Jazim Abbas",
    socialHandle: "jazimabbas",
    jobRole: "Senior Software Engineer",
    company: "Google",
    gender: "male",
    currentLocation: "Vancouver, Canada",
  });
};

const seed = async () => {
  try {
    await seedUser();
  } catch (err) {
    console.log("Error", err);
  }
};

seed();
