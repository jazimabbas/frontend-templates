import { useAtomValue } from "jotai";
import { Button } from "@repo/ui-components/Button";
import { ImageCard } from "../ImageCard";
import { Actions, Wrapper } from "./Client";
import { imagesAtom, imageSelectedAtom } from "@/store/modal";

export function CardList() {
  const images = useAtomValue(imagesAtom);
  const currentlyImageSelected = useAtomValue(imageSelectedAtom);

  if (images.length === 0) return <></>;

  return (
    <Wrapper>
      {images.map((file, idx) => (
        <ImageCard key={idx} {...file} currentSelected={currentlyImageSelected} />
      ))}

      <Actions>
        <Button variant="secondary" size="lg">
          Cancal
        </Button>
        <Button variant="primary" size="lg" disabled={!currentlyImageSelected}>
          Select image
        </Button>
      </Actions>
    </Wrapper>
  );
}
