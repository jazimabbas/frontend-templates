import { Metadata } from "next";
import { RiStarLine } from "@remixicon/react";
import { NewButton } from "@/components/NewButton";

export const metadata: Metadata = {
  title: "Playground",
};

export default function ButtonPage() {
  return (
    <div style={{ margin: "50px" }}>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <NewButton size="lg" leftIcon={RiStarLine}>
          Button CTA
        </NewButton>
        <NewButton variant="secondary" size="2xl" rightIcon={RiStarLine}>
          Button CTA
        </NewButton>
        <NewButton variant="destructive">Button CTA</NewButton>
        <NewButton iconOnly icon={RiStarLine} />
      </div>
    </div>
  );
}
