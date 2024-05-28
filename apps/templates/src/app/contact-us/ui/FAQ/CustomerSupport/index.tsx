import { Button } from "@/components/Button";
import { Title, Link, Card } from "./Client";

export function CustomerSupport() {
  return (
    <Card>
      <div>
        <Title>Can’t find the answer you’re looking for?</Title>
        <p>
          Reach out to our <Link href="">customer support</Link> team.
        </p>
      </div>
      <Button>Get in touch</Button>
    </Card>
  );
}
