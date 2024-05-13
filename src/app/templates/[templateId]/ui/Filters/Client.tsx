"use client";
import { styled } from "@mui/material";
import FormControl from "@mui/material/FormControl";

export const Wrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("tablet")]: {
    display: "none",
  },

  marginBottom: "20px",
}));

export const SelectWrapper = styled(FormControl)(({ theme }) => ({
  minWidth: "50%",

  [theme.breakpoints.down("mobile")]: {
    minWidth: "100%",
  },
}));
