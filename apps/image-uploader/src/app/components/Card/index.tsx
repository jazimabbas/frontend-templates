import Image from "next/image";
import Stack from "@mui/material/Stack";
import { RiCloseLine } from "@remixicon/react";
import LinearProgress from "@mui/material/LinearProgress";
import { Button } from "@repo/ui-components/Button";
import { Box } from "@mui/material"; // FIXME: Remove this
import { ContentWrapper, Filename, FileSize, ImageWrapper, Wrapper } from "./Client";

export function Card() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src="/images/girl.jpeg"
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
            <Filename>IMG_0082.jpg</Filename>
            <Button variant="link:gray" size="xl" iconOnly icon={RiCloseLine} />
          </Stack>
          <FileSize>331kb</FileSize>
        </Stack>
        <Stack flexDirection="row" gap="16px" alignItems={"center"} marginBottom="5px">
          <Box sx={{ width: "100%", color: "var(--color-primary)" }}>
            <LinearProgress
              color="inherit"
              variant="determinate"
              value={20}
              sx={{
                height: "6px",
                backgroundColor: "#E5E7EB",
                borderRadius: "9999px",
              }}
            />
          </Box>
          <p style={{ fontSize: "12px", fontWeight: 500 }}>27%</p>
        </Stack>
      </ContentWrapper>
    </Wrapper>
  );
}
