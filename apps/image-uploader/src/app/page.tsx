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
import { getUser } from "@/actions";

export const metadata: Metadata = {
  title: "Image Uploader • Jazim Abbas",
};

export default async function ImageUploaderPage() {
  const user = await getUser();

  if (!user)
    return (
      <Wrapper>
        <p>Oops, User is not found. You might need to populate the Seed Data.</p>
      </Wrapper>
    );

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
          <Title>{user.name}</Title>
          <AboutWrapper>
            <p>@{user.socialHandle}</p>
            <span className="light">•</span>
            <p>
              {user.jobRole} <span className="light">at</span> {user.company}
            </p>
            <span className="light">•</span>
            <span className="light">{user.gender === "male" ? "He/Him" : "She/Her"}</span>
          </AboutWrapper>
          <Location>
            <span>🇨🇦</span>
            <p>{user.currentLocation}</p>
          </Location>
        </ContentWrappeer>
      </Card>

      <ImageProvider>
        <ImageUploadModal />
      </ImageProvider>
    </Wrapper>
  );
}
