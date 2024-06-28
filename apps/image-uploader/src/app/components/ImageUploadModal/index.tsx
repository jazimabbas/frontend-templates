"use client";
import { useReducer } from "react";
import { Backdrop, Modal } from "@mui/material";
import { reducer } from "@/app/helpers/reducer";
import { backdropSxProps, Wrapper } from "./Client";
import { UploadModalContent } from "../UploadModalContent";

export function ImageUploadModal() {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <Modal
      open
      onClose={() => console.log("modal closed")}
      slots={{ backdrop: Backdrop }}
      sx={{ margin: "15px" }}
      slotProps={{
        backdrop: {
          sx: backdropSxProps,
        },
      }}
    >
      <Wrapper>
        <UploadModalContent state={state} dispatch={dispatch} />
      </Wrapper>
    </Modal>
  );
}
