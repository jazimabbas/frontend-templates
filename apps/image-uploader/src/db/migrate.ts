"use server";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from ".";
  
async function main() {
  try {
    await migrate(db, { migrationsFolder: "src/db/migrations" });
  } catch (err) {
    console.log("Error", err);
  }
}

main();
