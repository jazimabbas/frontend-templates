import { ModalCard } from "../ModalCard";
import { Heading, SubHeading } from "./Client";

export function UploadLimit() {
  return (
    <ModalCard>
      <Heading>{"You've"} reached the image limit</Heading>
      <SubHeading>Remove one or more to upload more images.</SubHeading>
    </ModalCard>
  );
}
