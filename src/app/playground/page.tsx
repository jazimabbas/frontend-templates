import { Metadata } from "next";
import { FeatureBulletsHeroSection } from "@/components/FeatureBulletsHeroSection";

export const metadata: Metadata = {
  title: "Playground",
};

export default function PlaygroundPage() {
  return (
    <>
      <div style={{ margin: "16px" }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <FeatureBulletsHeroSection />
        </div>
      </div>
    </>
  );
}
