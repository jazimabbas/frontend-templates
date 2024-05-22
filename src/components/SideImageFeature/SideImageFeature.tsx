import { RiHdLine, RiRainbowLine, RiWaterPercentLine } from "@remixicon/react";
import {
  Description,
  Feature,
  FeatureContent,
  FeatureList,
  FeatureTitle,
  FeatureWrapper,
  IconWrapper,
  ImageWrapper,
  Img,
  Subtitle,
  Wrapper,
} from "./Client";

const features: { title: string; description: string; Icon: React.ComponentType<any> }[] = [
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
];

export function SideImageFeature() {
  return (
    <Wrapper>
      <div className="center">
        <Subtitle>High quality images</Subtitle>
        <h2>For designers, by designers</h2>
        <Description>
          Unleash boundless creativity with a large repository of images optimized for designers
        </Description>
      </div>
      <FeatureWrapper>
        <FeatureList>
          {features.map((feature) => (
            <Feature key={feature.title}>
              <IconWrapper>
                <feature.Icon size={24} />
              </IconWrapper>
              <FeatureContent>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <p>{feature.description}</p>
              </FeatureContent>
            </Feature>
          ))}
        </FeatureList>
        <ImageWrapper>
          <Img
            src="/images/feature-side-right-image.png"
            alt="Feature Side Right"
            width={592}
            height={394}
          />
        </ImageWrapper>
      </FeatureWrapper>
    </Wrapper>
  );
}
