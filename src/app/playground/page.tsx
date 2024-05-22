import { Metadata } from "next";
import { Wrapper } from "./Client";
import { SideImageFeature } from "@/components/SideImageFeature";

export const metadata: Metadata = {
  title: "Playground",
};

export default function PlaygroundPage() {
  return (
    <Wrapper>
      <SideImageFeature />
    </Wrapper>
  );
}
