import { type Metadata } from "next/types";
import { Main,  } from "./ui/Common";
import { Hero } from "./ui/Hero";
import { Navbar } from "@/components/Navbar";
import { MaxWidth } from "@/components/MaxWidth";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <Main>
        <MaxWidth>
          <Hero />
        </MaxWidth>
      </Main>
    </>
  );
}
