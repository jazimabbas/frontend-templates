import Image from "next/image";
import Stack from "@mui/material/Stack";
import {
  ContentWrapper,
  ErrorMessage,
  Filename,
  FileSize,
  IconWrapper,
  ImageWrapper,
  Wrapper,
} from "./Client";
import { RiFileDamageLine } from "@remixicon/react";

type Props = {
  imgSrc: string | File;
  filename: string;
  fileSize: string;
  trailing: React.ReactNode;
  children: React.ReactNode;
  hasError?: boolean;
  errorMessage?: string;
};

export function Card({ imgSrc, filename, fileSize, trailing, hasError, children }: Props) {
  return (
    <Wrapper>
      {hasError ? (
        <IconWrapper>
          <RiFileDamageLine size={32} />
        </IconWrapper>
      ) : (
        <ImageWrapper>
          <Image
            src={imgSrc as any}
            alt="User Avatar"
            width={80}
            height={80}
            style={{ objectFit: "cover", objectPosition: "center" }}
            // objectFit="cover"
            // objectPosition="center"
          />
        </ImageWrapper>
      )}

      <ContentWrapper>
        <Stack flexDirection="column">
          <Stack flexDirection="row">
            <Filename>{filename}</Filename>
            {trailing}
          </Stack>
          <FileSize>{fileSize}</FileSize>
        </Stack>
        {hasError ? (
          <ErrorMessage>
            The file format of IMG_0080.pcx is not supported. Please upload an image in one of the
            following formats: JPG or PNG.
          </ErrorMessage>
        ) : (
          children
        )}
      </ContentWrapper>
    </Wrapper>
  );
}
