import { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Playground",
};

export default function ButtonPage() {
  return (
    <>
      <div style={{ margin: "50px" }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <BlogCard
            title="Top 5 Living Room Inspirations"
            excerpt="Curated vibrants colors for your living, make it pop & calm in the same time."
            badge={{ label: "Interior" }}
          />
        </div>
      </div>
    </>
  );
}
