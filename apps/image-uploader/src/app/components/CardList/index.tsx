import { useState } from "react";
import { Button } from "@repo/ui-components/Button";
import { ImageCard } from "../ImageCard";
import { Actions, Wrapper } from "./Client";
import { useImageUpload } from "../Providers";

export function CardList() {
  const [selected, setSelected] = useState<string>();
  const files = useImageUpload();

  if (files.length === 0) return <></>;

  return (
    <Wrapper>
      {files.map((file, idx) => (
        <ImageCard key={idx} {...file} currentSelected={selected} onSelected={setSelected} />
      ))}

      <Actions>
        <Button variant="secondary" size="lg">
          Cancal
        </Button>
        <Button variant="primary" size="lg" disabled={!selected}>
          Select image
        </Button>
      </Actions>
    </Wrapper>
  );
}
