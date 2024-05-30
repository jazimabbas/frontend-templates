export interface BreakpointOverrides {
  mobile: true;
  tablet: true;
  desktop: true;
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mobile: true;
    tablet: true;
    desktop: true;
  }
}
