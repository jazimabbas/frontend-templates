import {
  ActionWrapper,
  Button,
  ContentWrapper,
  Description,
  ImageWrapper,
  Img,
  Wrapper,
} from "./Client";

export function SimpleHeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <h1>Well crafted abstract images</h1>
        <Description>
          High quality abstract images for your projects, wallpaper and presentations.
        </Description>
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
          src="/images/simple-hero-section-img.png"
          alt="Simple Hero section"
          width={500}
          height={526}
        />
      </ImageWrapper>
    </Wrapper>
  );
}
