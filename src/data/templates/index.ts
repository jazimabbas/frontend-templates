import { pages } from "./pages";
import { Template } from "./types";
import { components } from "./components";

export const templates: Template[] = [
  { section: "Page Sections", categories: pages },
  { section: "Components", categories: components },
];

export const allCategoriesData = [...pages, ...components];
