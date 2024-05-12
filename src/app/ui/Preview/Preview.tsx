import { Titlebar } from "./Titlebar";
import { Iframe, Wrapper } from "./Client";
import { Category } from "@/data/templates/types";

export function Preview({ category }: { category: Category }) {
  const height = category.type === "page" ? 500 : 200;

  return (
    <Wrapper>
      <Titlebar category={category} />
      <Iframe src={category.url} loading="lazy" width="100%" height={height} title="#" />
    </Wrapper>
  );
}
