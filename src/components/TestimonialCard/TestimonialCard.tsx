import { Avatar, Description, Handle, Header, HeaderContent, Name, Wrapper } from "./Client";

export type Props = React.ComponentProps<typeof Wrapper> & {
  name: string;
  handle: string;
  img: {
    src: string;
    alt: string;
  };
  testimonial: string;
};

export function TestimonialCard({ name, handle, img, testimonial, ...delegated }: Props) {
  return (
    <Wrapper {...delegated}>
      <Header>
        <Avatar width={48} height={48} src={img.src} alt={img.alt} />
        <HeaderContent>
          {/* This div is super important to proper render truncate text when using flex */}
          <div>
            <Name>{name}</Name>
          </div>
          <Handle>{handle}</Handle>
        </HeaderContent>
      </Header>
      {/* This div is super important to proper render truncate text when using flex */}
      <div>
        <Description>{testimonial}</Description>
      </div>
    </Wrapper>
  );
}
