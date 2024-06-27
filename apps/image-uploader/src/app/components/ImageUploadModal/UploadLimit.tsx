import { Card, Heading, SubHeading } from "./Client";

export function UploadLimit() {
  return (
    <Card>
      <Heading>{"You've"} reached the image limit</Heading>
      <SubHeading>Remove one or more to upload more images.</SubHeading>
    </Card>
  );
}
