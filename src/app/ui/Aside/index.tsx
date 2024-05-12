import { templates } from "@/data/templates";
import { CategoryList } from "../Categories";
import { Category } from "@/data/templates/types";
import { ContentWrapper, Wrapper } from "./Client";

export function Aside({ category }: { category: Category }) {
  return (
    <Wrapper>
      <ContentWrapper>
        {templates.map((template) => (
          <CategoryList key={template.section} selectedCategory={category} {...template} />
        ))}
      </ContentWrapper>
    </Wrapper>
  );
}
