"use client";
import { Backdrop, Modal } from "@mui/material";
import { backdropSxProps, Wrapper } from "./Client";
import { UploadModalContent } from "../UploadModalContent";

export function ImageUploadModal() {
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
        <UploadModalContent />
      </Wrapper>
    </Modal>
  );
}
