import { Metadata } from "next";
import { Navbar } from "./ui/Navbar";
import { Main, Wrapper } from "./ui/Client";
import { MaxWidth } from "@/components/MaxWidth";
import { PageContent } from "./ui/PageContent";

export const metadata: Metadata = {
  title: "GreatFrontend Templates - Jazim Abbas",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Main>
        <MaxWidth>
          <Wrapper>
            <PageContent />
          </Wrapper>
        </MaxWidth>
      </Main>
    </>
  );
}
