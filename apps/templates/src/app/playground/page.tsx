import { Metadata } from "next";
import { Wrapper } from "./Client";
import { SideImageFeature } from "@/components/SideImageFeature";
import { leftImageFeaturesData } from "@/utils/data";

export const metadata: Metadata = {
  title: "Playground",
};

export default function PlaygroundPage() {
  return (
    <Wrapper>
      <SideImageFeature {...leftImageFeaturesData} />
    </Wrapper>
  );
}
