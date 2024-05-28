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
  Title,
  Wrapper,
} from "./Client";

type SideImageFeature = { title: string; description: string; Icon: React.ComponentType<any> };

export type SideImageFeatureProps = {
  img: {
    src: string;
    alt?: string;
  };
  subtitle: string;
  title: string;
  description: string;
  imgVariant?: "left" | "right";
  features: SideImageFeature[];
};

export function SideImageFeature({
  img,
  subtitle,
  title,
  description,
  imgVariant = "right",
  features,
}: SideImageFeatureProps) {
  return (
    <Wrapper>
      <div className="center">
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
      <FeatureWrapper imgVariant={imgVariant}>
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
          <Img src={img.src} alt={img.alt ?? "Feature Side Image"} width={592} height={394} />
        </ImageWrapper>
      </FeatureWrapper>
    </Wrapper>
  );
}
