import { Metadata } from "next";
import { Card } from "../common/Card";
import { leftImageFeaturesData } from "@/utils/data";
import { SideImageFeature } from "@/components/SideImageFeature";

export const metadata: Metadata = {
  title: "Feature Section Left Side Image",
};

export default function Page() {
  return (
    <Card>
      <SideImageFeature {...leftImageFeaturesData} />
    </Card>
  );
}
