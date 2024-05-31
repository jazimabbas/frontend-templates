import { RiCloseLine } from "@remixicon/react";
import { Button } from "@repo/ui-components/Button";
import { Card } from "../Card";
import { Progress, ProgressCount, ProgressWrapper, Wrapper } from "./Client";

export function ProgressCard() {
  return (
    <Card
      imgSrc="/images/girl.jpeg"
      filename="IMG_0082.jpg"
      fileSize="331kb"
      trailing={<Button variant="link:gray" size="xl" iconOnly icon={RiCloseLine} />}
    >
      <Wrapper>
        <ProgressWrapper>
          <Progress color="inherit" variant="determinate" value={27} />
        </ProgressWrapper>
        <ProgressCount>27%</ProgressCount>
      </Wrapper>
    </Card>
  );
}
