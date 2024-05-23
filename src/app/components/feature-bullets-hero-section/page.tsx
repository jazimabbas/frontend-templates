import { Metadata } from "next";
import { Card } from "../common/Card";
import { FeatureBulletsHeroSection } from "@/components/FeatureBulletsHeroSection";

export const metadata: Metadata = {
  title: "Feature Bullets Hero Section",
};

export default function FeatureBulletsHeroSectionPage() {
  return (
    <Card>
      <FeatureBulletsHeroSection />
    </Card>
  );
}
