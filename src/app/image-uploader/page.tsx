import { Metadata } from "next";
import Image from "next/image";
import { type ComponentProps } from "react";
import { Button } from "@/components/Button";
import { AvatarIcon } from "./components/AvatarIcon";
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
import { ImageUploadModal } from "./components/ImageUploadModal";
import { ResponsiveComponent } from "@/components/ResponsiveComponent";

export const metadata: Metadata = {
  title: "Image Uploader",
};

export default function ImageUploaderPage() {
  return (
    <Wrapper>
      <Card>
        <Image src="/images/image-uploader/cover.png" alt="Cover" width={768} height={176} />
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

      <ImageUploadModal />
    </Wrapper>
  );
}
