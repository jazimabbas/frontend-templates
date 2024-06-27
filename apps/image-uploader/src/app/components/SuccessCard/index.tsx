import { Button } from "@repo/ui-components/Button";
import { RiCheckLine, RiCloseLine } from "@remixicon/react";
import { Card } from "../Card";

export function SuccessCard() {
  return (
    <Card
      imgSrc="/images/girl.jpeg"
      filename="IMG_0082.jpg"
      fileSize="331kb"
      trailing={<Button variant="link:gray" size="xl" iconOnly icon={RiCloseLine} />}
    >
      <Button
        as="p"
        size="md"
        variant="link:gray"
        leftIcon={RiCheckLine}
        sx={{ width: "fit-content", color: "var(--color-success-700)", cursor: "default" }}
      >
        Upload success!
      </Button>
    </Card>
  );
}
