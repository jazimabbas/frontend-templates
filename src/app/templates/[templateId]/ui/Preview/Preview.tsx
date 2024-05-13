"use client";
import { Titlebar } from "./Titlebar";
import { Iframe, Wrapper } from "./Client";
import { Category } from "@/data/templates/types";
import { Box, CircularProgress } from "@mui/material";
import useIsFrameLoaded from "@/hooks/useIsIFrameLoaded";

export function Preview({ category }: { category: Category }) {
  const height = category.type === "page" ? 500 : 200;
  const { iframeRef, isIframeLoaded } = useIsFrameLoaded();

  return (
    <Wrapper>
      <Titlebar category={category} />
      <Box sx={{ width: "100%", height, position: "relative" }}>
        <Iframe
          ref={iframeRef as any}
          src={category.url}
          loading="lazy"
          width="100%"
          height={height}
          title="#"
        />
        {!isIframeLoaded && (
          <CircularProgress
            sx={{
              position: "absolute",
              zIndex: 10,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "block",
            }}
          />
        )}
      </Box>
    </Wrapper>
  );
}
