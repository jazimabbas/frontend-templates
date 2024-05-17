import { Metadata } from "next";
import { Testimonial } from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Playground",
};

export default function ButtonPage() {
  return (
    <>
      <div style={{ margin: "50px" }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Testimonial
            name="Sarah Dole"
            handle="@sarahdole"
            img={{ src: "/images/girl.jpeg", alt: "Small Girl" }}
            testimonial="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
          />
        </div>
      </div>
    </>
  );
}
