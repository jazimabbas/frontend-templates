"use server";

import { db } from "@/db";

export const getUser = () => {
  return db.query.users.findFirst({});
};
