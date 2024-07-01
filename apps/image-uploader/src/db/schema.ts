"use server";
import { relations } from "drizzle-orm";
import { AnyPgColumn, integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  socialHandle: varchar("social_handle", { length: 256 }).notNull(),
  jobRole: varchar("job_role", { length: 256 }).notNull(),
  company: varchar("company", { length: 256 }).notNull(),
  gender: varchar("gender", { length: 50 }).default("male"),
  currentLocation: varchar("current_location", { length: 256 }).notNull(),
  bgImage: varchar("bg_image", { length: 256 }),
  avatar: text("avatar").references((): AnyPgColumn => images.id, {
    onUpdate: "cascade",
    onDelete: "cascade",
  }),
});

export const images = pgTable("images", {
  id: text("id").primaryKey(),
  size: integer("size").notNull(), // fileSize
  name: varchar("name", { length: 256 }).notNull(), // filename
  url: varchar("url", { length: 1055 }).notNull(),
  parentImage: text("iamgeId").references((): AnyPgColumn => images.id, {
    onUpdate: "cascade",
    onDelete: "cascade",
  }),
  user: text("user")
    .notNull()
    .references((): AnyPgColumn => users.id, {
      onUpdate: "cascade",
      onDelete: "cascade",
    }),
});

export const userRelations = relations(users, ({ one, many }) => ({
  avatar: one(images, {
    fields: [users.avatar],
    references: [images.id],
  }),
  images: many(images),
}));

export const imageRelations = relations(images, ({ one }) => ({
  user: one(users, {
    fields: [images.user],
    references: [users.id],
  }),
  parentImage: one(images, {
    fields: [images.parentImage],
    references: [images.id],
  }),
}));
