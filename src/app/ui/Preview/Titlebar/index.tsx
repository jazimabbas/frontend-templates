import { RiShareBoxLine } from "@remixicon/react";
import { Title, Wrapper } from "./Client";
import { Chip, Stack, Tooltip } from "@mui/material";

export function Titlebar() {
  return (
    <Wrapper>
      <Title>Contact us Page</Title>
      <Stack flexDirection="row" gap="15px" alignItems="center">
        <Tooltip arrow title="View Code">
          <Chip label="Code" clickable component="a" href="/contact-us" />
        </Tooltip>
        <Tooltip arrow title="Open in Fullscreen">
          <a href="/contact-us" target="_blank">
            <RiShareBoxLine size={18} className="pointer" />
          </a>
        </Tooltip>
      </Stack>
    </Wrapper>
  );
}
