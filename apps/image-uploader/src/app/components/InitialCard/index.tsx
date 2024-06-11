import { Button } from "@repo/ui-components/Button";
import { RiDeleteBin3Line } from "@remixicon/react";
import { Card } from "../Card";
import { Radio } from "./Client";

export function InitialCard() {
  return (
    <Card
      imgSrc="/images/girl.jpeg"
      filename="IMG_0082.jpg"
      fileSize="331kb"
      trailing={<Radio type="radio" name="testing" />}
    >
      <Button
        size="md"
        variant="link:gray"
        leftIcon={RiDeleteBin3Line}
        sx={{ width: "fit-content" }}
      >
        Delete
      </Button>
    </Card>
  );
}
