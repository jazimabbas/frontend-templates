import { images, users } from "./schema";

export type NewImage = typeof images.$inferInsert;

export type Image = typeof images.$inferSelect;

export type NewUser = typeof users.$inferInsert;

export type User = typeof users.$inferSelect;
