import { Button } from "@repo/ui-components/Button";
import { ProgressCard } from "../ProgressCard";
import { Actions, Wrapper } from "./Client";

export function CardList({ files }: { files?: File[] }) {
  if (!files || files.length === 0) return <></>;

  return (
    <Wrapper>
      {files.map((_, idx) => (
        <ProgressCard key={idx} />
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
