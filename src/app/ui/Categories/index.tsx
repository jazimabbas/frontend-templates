import { Category, Template } from "@/data/templates/types";
import { Title, Items, Item } from "./Client";

type Props = Template & { selectedCategory: Category };

export function CategoryList({ section, categories, selectedCategory }: Props) {
  return (
    <div>
      <Title>{section}</Title>
      <Items>
        {categories.map((category) => (
          <Item aria-selected={selectedCategory.id === category.id} key={category.id}>
            {category.title}
          </Item>
        ))}
      </Items>
    </div>
  );
}
