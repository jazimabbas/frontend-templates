"use server";

import { db } from "@/db";
import { images, users } from "@/db/schema";
import { NewImage } from "@/db/types";
import { eq } from "drizzle-orm";

export const getUser = async () => {
  const user = await db.query.users.findFirst({});
  if (!user) return null;

  const dbImages = await db.query.images.findMany({ where: eq(users.id, user.id) });
  let images = [];

  const cropImageIdx = dbImages.findIndex((image) => image.parentImage);
  if (cropImageIdx !== -1) {
    const [deleteItem] = dbImages.splice(cropImageIdx, 1);
    
  }
};

export const addImage = async (payload: Omit<NewImage, "user">) => {
  const user = await getUser();
  if (!user) throw new Error("User is not found");

  return db.insert(images).values({ ...payload, user: user.id });
};
