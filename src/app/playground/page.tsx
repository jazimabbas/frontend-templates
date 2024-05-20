import { Metadata } from "next";
import { SimpleHeroSection } from "@/components/SimpleHeroSection";

export const metadata: Metadata = {
  title: "Playground",
};

export default function PlaygroundPage() {
  return (
    <>
      <div style={{ margin: "16px" }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <SimpleHeroSection />
        </div>
      </div>
    </>
  );
}
