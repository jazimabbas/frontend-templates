import { Button } from "@repo/ui-components/Button";
import { Actions, Wrapper } from "./Client";
import { State } from "@/app/helpers/reducer";
import { ImageCard } from "../ImageCard";

export function CardList({ files }: { files: State[] }) {
  if (files.length === 0) return <></>;

  return (
    <Wrapper>
      {files.map((file, idx) => (
        <ImageCard key={idx} {...file} />
      ))}

      <Actions>
        <Button variant="secondary" size="lg">
          Cancal
        </Button>
        <Button variant="primary" size="lg">
          Select image
        </Button>
      </Actions>
    </Wrapper>
  );
}
