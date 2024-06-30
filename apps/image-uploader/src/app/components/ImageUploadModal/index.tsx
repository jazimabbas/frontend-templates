"use client";
import { Backdrop, Modal } from "@mui/material";

import { useImageUpload } from "../Providers";
import { backdropSxProps, Wrapper } from "./Client";
import { UploadModalContent } from "../UploadModalContent";
import { CropImage } from "../CropImage";

export function ImageUploadModal() {
  const { cropImageSelected } = useImageUpload();
  const styles = cropImageSelected ? { width: "343px" } : {};

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
      <Wrapper sx={styles}>{cropImageSelected ? <CropImage /> : <UploadModalContent />}</Wrapper>
    </Modal>
  );
}
