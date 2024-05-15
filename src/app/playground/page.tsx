import { Metadata } from "next";
import { NewButton } from "@/components/NewButton";

export const metadata: Metadata = {
  title: "Playground",
};

export default function ButtonPage() {
  return (
    <div style={{ margin: "50px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <NewButton>Button CTA</NewButton>
        <NewButton variant="secondary">Button CTA</NewButton>
      </div>
    </div>
  );
}
