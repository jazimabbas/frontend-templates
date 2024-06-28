import { Metadata } from "next";
import Image from "next/image";
import { type ComponentProps } from "react";
import { Button } from "@repo/ui-components/Button";
import { ResponsiveComponent } from "@repo/ui-components/ResponsiveComponent";
import { AvatarIcon } from "./components/AvatarIcon";
import { ImageUploadModal } from "./components/ImageUploadModal";
import {
  AboutWrapper,
  AvatarWrapper,
  Card,
  ContentWrappeer,
  Header,
  Location,
  Title,
  Wrapper,
} from "./components/Client";
import { ImageProvider } from "./components/Providers";

export const metadata: Metadata = {
  title: "Image Uploader • Jazim Abbas",
};

export default function ImageUploaderPage() {
  return (
    <Wrapper>
      <Card>
        <Image src="/images/cover.png" alt="Cover" width={768} height={176} />
        <ContentWrappeer>
          <Header>
            <AvatarWrapper>
              <AvatarIcon />
            </AvatarWrapper>
            <ResponsiveComponent<ComponentProps<typeof Button>>
              queries={[{ mediaQuery: "(max-width: 568px)", props: { size: "sm" } }]}
              component={
                <Button size="lg" variant="secondary">
                  Update picture
                </Button>
              }
            />
          </Header>
          <Title>Jazim Abbas</Title>
          <AboutWrapper>
            <p>@jazimabbas</p>
            <span className="light">•</span>
            <p>
              Senior Software Engineer <span className="light">at</span> Google
            </p>
            <span className="light">•</span>
            <span className="light">He/Him</span>
          </AboutWrapper>
          <Location>
            <span>🇨🇦</span>
            <p>Vancouver, Canada</p>
          </Location>
        </ContentWrappeer>
      </Card>

      <ImageProvider>
        <ImageUploadModal />
      </ImageProvider>
    </Wrapper>
  );
}
