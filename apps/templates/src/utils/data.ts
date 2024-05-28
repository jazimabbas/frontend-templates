import {
  RiHdLine,
  RiWaterPercentLine,
  RiRainbowLine,
  RiRocket2Line,
  RiP2pLine,
  RiCopyrightLine,
} from "@remixicon/react";
import { SideImageFeatureProps } from "@/components/SideImageFeature";

export const rightImageFeaturesData: SideImageFeatureProps = {
  img: { src: "/images/feature-side-right-image.png" },
  subtitle: "High quality image",
  title: "For designers, by designers",
  description:
    "Unleash boundless creativity with a large repository of images optimized for designers",
  imgVariant: "right",
  features: [
    {
      title: "5K resolution support",
      description:
        "All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.",
      Icon: RiHdLine,
    },
    {
      title: "From water to glass",
      description:
        "We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.",
      Icon: RiWaterPercentLine,
    },
    {
      title: "Portrait or landscape",
      description:
        "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.",
      Icon: RiRainbowLine,
    },
  ],
};

export const leftImageFeaturesData: SideImageFeatureProps = {
  img: { src: "/images/feature-side-left-image.png" },
  subtitle: "Best-in-class support",
  title: "Convenience and licensing that empowers",
  description:
    "In a world where storytelling constantly evolves, don't let licensing and poor support hold you down.",
  imgVariant: "left",
  features: [
    {
      title: "Faster downloads",
      description:
        "Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience.",
      Icon: RiRocket2Line,
    },
    {
      title: "Convenience for teams",
      description:
        "Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.",
      Icon: RiP2pLine,
    },
    {
      title: "Royalty-free licensing",
      description:
        "Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project.",
      Icon: RiCopyrightLine,
    },
  ],
};
