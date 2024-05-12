import { RiShareBoxLine } from "@remixicon/react";
import { Title, Wrapper } from "./Client";
import { Chip, Stack, Tooltip } from "@mui/material";
import { Category } from "@/data/templates/types";

export function Titlebar({ category }: { category: Category }) {
  return (
    <Wrapper>
      <Title>Contact us Page</Title>
      <Stack flexDirection="row" gap="15px" alignItems="center">
        <Tooltip arrow title="View Code">
          <Chip label="Code" clickable component="a" href={category?.url} />
        </Tooltip>
        <Tooltip arrow title="Open in Fullscreen">
          <a href={category?.url} target="_blank">
            <RiShareBoxLine size={18} className="pointer" />
          </a>
        </Tooltip>
      </Stack>
    </Wrapper>
  );
}
