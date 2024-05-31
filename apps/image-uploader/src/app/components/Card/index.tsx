import Image from "next/image";
import Stack from "@mui/material/Stack";
import { ContentWrapper, Filename, FileSize, ImageWrapper, Wrapper } from "./Client";

type Props = {
  imgSrc: string;
  filename: string;
  fileSize: string;
  trailing: React.ReactNode;
  children: React.ReactNode;
};

export function Card({ imgSrc, filename, fileSize, trailing, children }: Props) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={imgSrc}
          alt="User Avatar"
          width={80}
          height={80}
          objectFit="cover"
          objectPosition="center"
        />
      </ImageWrapper>
      <ContentWrapper>
        <Stack flexDirection="column">
          <Stack flexDirection="row">
            <Filename>{filename}</Filename>
            {trailing}
          </Stack>
          <FileSize>{fileSize}</FileSize>
        </Stack>
        {children}
      </ContentWrapper>
    </Wrapper>
  );
}
