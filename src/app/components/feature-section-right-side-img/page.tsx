import { Metadata } from "next";
import { Card } from "../common/Card";
import { rightImageFeaturesData } from "@/utils/data";
import { SideImageFeature } from "@/components/SideImageFeature";

export const metadata: Metadata = {
  title: "Feature Section Right Side Image",
};

export default function Page() {
  return (
    <Card>
      <SideImageFeature {...rightImageFeaturesData} />
    </Card>
  );
}
