import { Metadata } from "next";
import { Wrapper } from "./Client";
import { MaxWidth } from "@/components/MaxWidth";
import { TestimonialCard } from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Testimonial Card Component",
};

export default function TestimonialCardPage() {
  return (
    <MaxWidth>
      <Wrapper>
        <TestimonialCard
          name="Sarah Dole"
          handle="@sarahdole"
          img={{ src: "/images/girl.jpeg", alt: "Small Girl" }}
          testimonial="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
        />
      </Wrapper>
    </MaxWidth>
  );
}
