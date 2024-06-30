"use client";
import { Backdrop, Modal } from "@mui/material";

import { useImageUpload } from "../Providers";
import { backdropSxProps, Wrapper } from "./Client";
import { UploadModalContent } from "../UploadModalContent";
import { CropImage } from "../CropImage";

export function ImageUploadModal() {
  const { cropImageSelected } = useImageUpload();
  const styles = cropImageSelected ? { width: "343px" } : {};
  const block = false;

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
      <>
        {block && (
          <Wrapper sx={styles}>
            {cropImageSelected ? <CropImage /> : <UploadModalContent />}
          </Wrapper>
        )}

        <Wrapper sx={{ width: "343px" }}>
          <CropImage />
        </Wrapper>
      </>
    </Modal>
  );
}
