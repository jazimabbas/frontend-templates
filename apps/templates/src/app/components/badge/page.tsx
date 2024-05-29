import { Metadata } from "next";
import { Badge } from "@repo/ui-components/badge";
import { GlobalStyles } from "../common/Global";
import { MaxWidth } from "@/components/MaxWidth";
import { BadgesWrapper, Wrapper } from "./Client";

export const metadata: Metadata = {
  title: "Badge Component",
};

export default function BadgePage() {
  return (
    <>
      <GlobalStyles />
      <MaxWidth>
        <Wrapper>
          <BadgesWrapper>
            <Badge color="neutral" size="sm">
              Label
            </Badge>
            <Badge color="neutral" size="md">
              Label
            </Badge>
            <Badge color="neutral" size="lg">
              Label
            </Badge>
          </BadgesWrapper>

          <BadgesWrapper>
            <Badge color="error" size="sm">
              Label
            </Badge>
            <Badge color="error" size="md">
              Label
            </Badge>
            <Badge color="error" size="lg">
              Label
            </Badge>
          </BadgesWrapper>

          <BadgesWrapper>
            <Badge color="warning" size="sm">
              Label
            </Badge>
            <Badge color="warning" size="md">
              Label
            </Badge>
            <Badge color="warning" size="lg">
              Label
            </Badge>
          </BadgesWrapper>

          <BadgesWrapper>
            <Badge color="success" size="sm">
              Label
            </Badge>
            <Badge color="success" size="md">
              Label
            </Badge>
            <Badge color="success" size="lg">
              Label
            </Badge>
          </BadgesWrapper>

          <BadgesWrapper>
            <Badge color="brand" size="sm">
              Label
            </Badge>
            <Badge color="brand" size="md">
              Label
            </Badge>
            <Badge color="brand" size="lg">
              Label
            </Badge>
          </BadgesWrapper>
        </Wrapper>
      </MaxWidth>
    </>
  );
}
