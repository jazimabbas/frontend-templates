import { templates } from "@/data/templates";
import { CategoryList } from "../Categories";
import { ContentWrapper, Wrapper } from "./Client";

export function Aside() {
  const selectedCategory = templates[0].categories[0];

  return (
    <Wrapper>
      <ContentWrapper>
        {templates.map((template) => (
          <CategoryList key={template.section} selectedCategory={selectedCategory} {...template} />
        ))}
      </ContentWrapper>
    </Wrapper>
  );
}
