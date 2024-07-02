"use client";
import { useAtomValue } from "jotai";
import { Backdrop, Modal } from "@mui/material";

import { CropImage } from "../CropImage";
import { cropImageSelectedAtom } from "@/store/modal";
import { backdropSxProps, Wrapper } from "./Client";
import { UploadModalContent } from "../UploadModalContent";

export function ImageUploadModal() {
  const currentCropImageId = useAtomValue(cropImageSelectedAtom);
  const styles = currentCropImageId ? { width: "343px" } : {};

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
      <Wrapper sx={styles}>{currentCropImageId ? <CropImage /> : <UploadModalContent />}</Wrapper>
    </Modal>
  );
}
