import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiPuzzle2Line,
  RiShieldUserLine,
  RiStackOverflowFill,
} from "@remixicon/react";
import { Label, Wrapper } from "./ui/Client";

export default function Homepage() {
  return (
    <Wrapper>
      <Stack alignItems="center" gap="15px">
        <Label>Checkout the following profiles</Label>
        <Stack flexDirection="row" gap="15px" flexWrap="wrap">
          <Chip
            clickable
            component="a"
            href="https://jazimabbas.dev"
            target="_blank"
            label="My Portfolio"
            icon={<RiShieldUserLine />}
          />
          <Chip
            clickable
            component="a"
            href="https://frontend-templates.jazimabbas.dev"
            target="_blank"
            label="My Frontend Templates"
            icon={<RiPuzzle2Line />}
          />
        </Stack>
        <Stack flexDirection="row" gap="15px" flexWrap="wrap">
          <Chip
            clickable
            component="a"
            href="https://github.com/jazimabbas"
            target="_blank"
            label="GitHub"
            icon={<RiGithubFill />}
          />
          <Chip
            clickable
            component="a"
            href="https://stackoverflow.com/users/18772048/jazim-abbas"
            target="_blank"
            label="Stackoverflow"
            icon={<RiStackOverflowFill />}
          />
          <Chip
            clickable
            component="a"
            href="https://www.linkedin.com/in/jazimabbas"
            target="_blank"
            label="LinkedIn"
            icon={<RiLinkedinBoxFill />}
          />
        </Stack>
      </Stack>
    </Wrapper>
  );
}
