import { Aside } from "./Aside";
import { Preview } from "./Preview";
import { Category } from "@/data/templates/types";
import { allCategoriesData, templates } from "@/data/templates";

export function PageContent({ templateId }: { templateId: string }) {
  let category: Category;
  const existingCategory = allCategoriesData.find((c) => c.id === templateId);
  category = existingCategory ?? templates[0].categories[0];

  return (
    <>
      <Aside category={category} />
      <Preview category={category} />
    </>
  );
}
