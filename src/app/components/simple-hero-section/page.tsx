import { Metadata } from "next";
import { SimpleHeroSection } from "@/components/SimpleHeroSection";
import { Card } from "../common/Card";

export const metadata: Metadata = {
  title: "Simple Hero Section",
};

export default function SimpleHeroSectionPage() {
  return (
    <Card>
      <SimpleHeroSection />
    </Card>
  );
}
