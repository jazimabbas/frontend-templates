import { Metadata } from "next";
import { Aside } from "./ui/Aside";
import { Navbar } from "./ui/Navbar";
import { Main, Wrapper } from "./ui/Client";
import { MaxWidth } from "@/components/MaxWidth";
import { CodeExamples } from "./ui/CodeExamples/CodeExamples";

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
            <Aside />
            <CodeExamples />
          </Wrapper>
        </MaxWidth>
      </Main>
    </>
  );
}
