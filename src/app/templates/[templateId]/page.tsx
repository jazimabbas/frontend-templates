import { Metadata } from "next";
import { Navbar } from "./ui/Navbar";
import { Main, MainWrapper, Wrapper } from "./ui/Client";
import { MaxWidth } from "@/components/MaxWidth";
import { PageContent } from "./ui/PageContent";
import { Filters } from "./ui/Filters";
import { Footer } from "./ui/Footer";

export const metadata: Metadata = {
  title: "GreatFrontend Templates - Jazim Abbas",
};

type Context = { params: { templateId: string } };

export default function HomePage({ params: { templateId } }: Context) {
  return (
    <MainWrapper>
      <Navbar />
      <Main>
        <MaxWidth>
          <Filters templateId={templateId} />
          <Wrapper>
            <PageContent templateId={templateId} />
          </Wrapper>
        </MaxWidth>
      </Main>
      <Footer />
    </MainWrapper>
  );
}
