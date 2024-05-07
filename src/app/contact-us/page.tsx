import { type Metadata } from "next/types";
import { FAQ } from "./ui/FAQ";
import { Hero } from "./ui/Hero";
import { Navbar } from "@/components/Navbar";
import { Main, MaxWidth } from "./ui/Common";

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
          <FAQ />
        </MaxWidth>
      </Main>
    </>
  );
}
