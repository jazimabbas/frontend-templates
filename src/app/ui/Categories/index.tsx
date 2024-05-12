"use client";
import { useCallback } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Title, Items, Item } from "./Client";
import { Category, Template } from "@/data/templates/types";

type Props = Template & { selectedCategory: Category };

export function CategoryList({ section, categories, selectedCategory }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleUpdateURL = (category: Category) => {
    router.push(pathname + "?" + createQueryString("category", category.id));
  };

  return (
    <div>
      <Title>{section}</Title>
      <Items>
        {categories.map((category) => (
          <Item
            aria-selected={selectedCategory.id === category.id}
            key={category.id}
            onClick={() => handleUpdateURL(category)}
          >
            {category.title}
          </Item>
        ))}
      </Items>
    </div>
  );
}
