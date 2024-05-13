import { Metadata } from "next";
import { Navbar } from "./ui/Navbar";
import { Main, Wrapper } from "./ui/Client";
import { MaxWidth } from "@/components/MaxWidth";
import { PageContent } from "./ui/PageContent";

export const metadata: Metadata = {
  title: "GreatFrontend Templates - Jazim Abbas",
};

type Context = { params: { templateId: string } };

export default function HomePage({ params: { templateId } }: Context) {
  return (
    <>
      <Navbar />
      <Main>
        <MaxWidth>
          <Wrapper>
            <PageContent templateId={templateId} />
          </Wrapper>
        </MaxWidth>
      </Main>
    </>
  );
}
