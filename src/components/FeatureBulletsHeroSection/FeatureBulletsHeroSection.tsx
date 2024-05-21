import { RiCheckFill } from "@remixicon/react";
import { Button } from "./Button";
import { Feature, FeatureList, IconWrapper, ActionWrapper } from "./Client";
import { Wrapper, ContentWrapper, ImageWrapper, Img } from "../common/Hero";

const features = [
  "Minimum 5K image resolution",
  "Various format variants available",
  "Retina display support",
];

export function FeatureBulletsHeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <h1>Premium abstract images</h1>
        <FeatureList>
          {features.map((feature) => (
            <Feature key={feature}>
              <IconWrapper>
                <RiCheckFill size={24} />
              </IconWrapper>
              <p>{feature}</p>
            </Feature>
          ))}
        </FeatureList>
        <ActionWrapper>
          <Button size="2xl" variant="secondary">
            Learn more
          </Button>
          <Button size="2xl" sx={{ paddingLeft: "40px", paddingRight: "40px" }} variant="primary">
            See pricing
          </Button>
        </ActionWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <Img
          src="/images/feature-bullets-hero-section.png"
          alt="Feature Bullets Hero section"
          width={500}
          height={526}
        />
      </ImageWrapper>
    </Wrapper>
  );
}
