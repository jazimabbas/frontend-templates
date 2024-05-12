"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Aside } from "./Aside";
import { Preview } from "./Preview";
import { Category } from "@/data/templates/types";
import { allCategoriesData, templates } from "@/data/templates";

export function PageContent() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    let existingCategory: Category | undefined;

    if (searchParams.has("category")) {
      const categoryId = searchParams.get("category");
      existingCategory = allCategoriesData.find((c) => c.id === categoryId);
    }

    if (!existingCategory) existingCategory = templates[0].categories[0];
    setCategory(existingCategory);
  }, [searchParams]);

  if (!category) return <></>;

  return (
    <>
      <Aside category={category!} />
      <Preview category={category!} />
    </>
  );
}
