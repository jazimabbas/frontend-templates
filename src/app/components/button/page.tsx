import { Metadata } from "next";
import { RiStarLine } from "@remixicon/react";
import { GlobalStyles } from "./Global";
import { Button } from "@/components/Button";
import { MaxWidth } from "@/components/MaxWidth";
import { ButtonsWrapper, Wrapper } from "./Client";

export const metadata: Metadata = {
  title: "Button Component",
};

export default function ButtonPage() {
  return (
    <>
      <GlobalStyles />
      <MaxWidth>
        <Wrapper>
          <ButtonsWrapper>
            <Button>Button CTA</Button>
            <Button size="lg" leftIcon={RiStarLine}>
              Button CTA
            </Button>
            <Button size="xl" rightIcon={RiStarLine}>
              Button CTA
            </Button>
            <Button size="2xl">Button CTA</Button>
            <Button iconOnly size="2xl" icon={RiStarLine} />
          </ButtonsWrapper>

          <ButtonsWrapper>
            <Button variant="secondary">Button CTA</Button>
            <Button variant="secondary" size="lg" leftIcon={RiStarLine}>
              Button CTA
            </Button>
            <Button variant="secondary" size="xl" rightIcon={RiStarLine}>
              Button CTA
            </Button>
            <Button variant="secondary" size="2xl">
              Button CTA
            </Button>
            <Button variant="secondary" size="2xl" iconOnly icon={RiStarLine} />
          </ButtonsWrapper>

          <ButtonsWrapper>
            <Button variant="tertiary">Button CTA</Button>
            <Button variant="tertiary" size="lg" leftIcon={RiStarLine}>
              Button CTA
            </Button>
            <Button variant="tertiary" size="xl" rightIcon={RiStarLine}>
              Button CTA
            </Button>
            <Button variant="tertiary" size="2xl">
              Button CTA
            </Button>
            <Button variant="tertiary" size="2xl" iconOnly icon={RiStarLine} />
          </ButtonsWrapper>

          <ButtonsWrapper>
            <Button variant="link">Button CTA</Button>
            <Button variant="link" size="lg" leftIcon={RiStarLine}>
              Button CTA
            </Button>
            <Button variant="link" size="xl" rightIcon={RiStarLine}>
              Button CTA
            </Button>
            <Button variant="link" size="2xl">
              Button CTA
            </Button>
            <Button variant="link" size="2xl" iconOnly icon={RiStarLine} />
          </ButtonsWrapper>

          <ButtonsWrapper>
            <Button variant="link:gray">Button CTA</Button>
            <Button variant="link:gray" size="lg" leftIcon={RiStarLine}>
              Button CTA
            </Button>
            <Button variant="link:gray" size="xl" rightIcon={RiStarLine}>
              Button CTA
            </Button>
            <Button variant="link:gray" size="2xl">
              Button CTA
            </Button>
            <Button variant="link:gray" size="2xl" iconOnly icon={RiStarLine} />
          </ButtonsWrapper>

          <ButtonsWrapper>
            <Button variant="destructive">Button CTA</Button>
            <Button variant="destructive" size="lg" leftIcon={RiStarLine}>
              Button CTA
            </Button>
            <Button variant="destructive" size="xl" rightIcon={RiStarLine}>
              Button CTA
            </Button>
            <Button variant="destructive" size="2xl">
              Button CTA
            </Button>
            <Button variant="destructive" size="2xl" iconOnly icon={RiStarLine} />
          </ButtonsWrapper>
        </Wrapper>
      </MaxWidth>
    </>
  );
}
