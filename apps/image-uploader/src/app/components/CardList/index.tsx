import { Button } from "@repo/ui-components/Button";
import { ImageCard } from "../ImageCard";
import { Actions, Wrapper } from "./Client";
import { useImageUpload } from "../Providers";

export function CardList() {
  const { files, currentSelected } = useImageUpload();

  if (files.length === 0) return <></>;

  return (
    <Wrapper>
      {files.map((file, idx) => (
        <ImageCard key={idx} {...file} currentSelected={currentSelected} />
      ))}

      <Actions>
        <Button variant="secondary" size="lg">
          Cancal
        </Button>
        <Button variant="primary" size="lg" disabled={!currentSelected}>
          Select image
        </Button>
      </Actions>
    </Wrapper>
  );
}
