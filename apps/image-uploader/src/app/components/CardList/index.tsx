import { useState } from "react";
import { Button } from "@repo/ui-components/Button";
import { ImageCard } from "../ImageCard";
import { State } from "@/app/helpers/reducer";
import { Actions, Wrapper } from "./Client";

export function CardList({ files }: { files: State[] }) {
  const [selected, setSelected] = useState<string>();

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
