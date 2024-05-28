import { type Metadata } from "next/types";
import { FAQ } from "./ui/FAQ";
import { Hero } from "./ui/Hero";
import { Navbar } from "@/components/Navbar";
import { Main, MaxWidth } from "./ui/Common";
import { Footer } from "./ui/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <Main>
        <MaxWidth as="main">
          <Hero />
          <FAQ />
        </MaxWidth>
        <Footer />
      </Main>
    </>
  );
}
