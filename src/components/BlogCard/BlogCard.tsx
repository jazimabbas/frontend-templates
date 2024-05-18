import { RiArrowRightLine } from "@remixicon/react";
import { Button } from "../Button";
import { Badge, BadgeColor } from "../Badge";
import { ContentWrapper, Excerpt, ImageWrapper, Img, Title, Wrapper } from "./Client";

type Props = React.ComponentProps<typeof Wrapper> & {
  badge: {
    label: string;
    color?: BadgeColor;
  };
  title: string;
  excerpt: string;
  href?: string;
};

export function BlogCard({
  title,
  excerpt,
  badge: { label, color = "success" },
  href,
  ...delegated
}: Props) {
  return (
    <Wrapper {...delegated}>
      <ImageWrapper>
        <Img priority={true} width={340} height={288} src="/images/blog-card.png" alt="Blog Card" />
      </ImageWrapper>
      <ContentWrapper>
        <Badge color={color} size="md" sx={{ marginBottom: "8px" }}>
          {label}
        </Badge>
        <Title>{title}</Title>
        <Excerpt>{excerpt}</Excerpt>
        <Button as="a" href={href} variant="link" rightIcon={RiArrowRightLine}>
          Read more
        </Button>
      </ContentWrapper>
    </Wrapper>
  );
}
