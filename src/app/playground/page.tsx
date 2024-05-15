import { Metadata } from "next";
import { RiStarLine } from "@remixicon/react";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Playground",
};

export default function ButtonPage() {
  return (
    <div style={{ margin: "50px" }}>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Button size="lg" leftIcon={RiStarLine}>
          Button CTA
        </Button>
        <Button variant="secondary" size="2xl" rightIcon={RiStarLine}>
          Button CTA
        </Button>
        <Button variant="destructive">Button CTA</Button>
        <Button iconOnly icon={RiStarLine} />
      </div>
    </div>
  );
}
