import { Metadata } from "next";
import { Wrapper } from "./Client";
import { FeatureBulletsHeroSection } from "@/components/FeatureBulletsHeroSection";

export const metadata: Metadata = {
  title: "Feature Bullets Hero Section",
};

export default function FeatureBulletsHeroSectionPage() {
  return (
    <Wrapper>
      <FeatureBulletsHeroSection />
    </Wrapper>
  );
}
