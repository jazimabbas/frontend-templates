import { Wrapper } from "./Client";
import { CategoryList } from "../Categories";

export function Aside() {
  return (
    <Wrapper>
      <CategoryList />
      <div style={{ marginTop: "50px" }}>
        <CategoryList />
      </div>
    </Wrapper>
  );
}
