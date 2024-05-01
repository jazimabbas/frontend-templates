import { LinkProps } from "@mui/material";
import { Wrapper } from "./Client";

export function Link(props: LinkProps) {
  return <Wrapper as="a" {...(props as any)} />;
}
