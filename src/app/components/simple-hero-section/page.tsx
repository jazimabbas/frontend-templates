import { Metadata } from "next";
import { SimpleHeroSection } from "@/components/SimpleHeroSection";
import { Wrapper } from "./Client";

export const metadata: Metadata = {
  title: "Simple Hero Section",
};

export default function SimpleHeroSectionPage() {
  return (
    <Wrapper>
      <SimpleHeroSection />
    </Wrapper>
  );
}
