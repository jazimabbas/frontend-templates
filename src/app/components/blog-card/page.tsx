import { MaxWidth } from "@/components/MaxWidth";
import { Metadata } from "next";
import { Wrapper } from "./Client";
import { BlogCard } from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog Card Component",
};

export default function BlogCardPage() {
  return (
    <MaxWidth>
      <Wrapper>
        <BlogCard
          title="Top 5 Living Room Inspirations"
          excerpt="Curated vibrants colors for your living, make it pop & calm in the same time."
          image={{ src: "/images/blog-card.png" }}
          badge={{ label: "Interior" }}
        />
      </Wrapper>
    </MaxWidth>
  );
}
