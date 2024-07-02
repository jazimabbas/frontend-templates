import { useMemo, useRef } from "react";
import { useAtomValue, useAtom } from "jotai";
import { CropperRef } from "react-advanced-cropper";

import { convertToBlob } from "./helpers";
import { cropImageSelectedAtom, imagesAtom } from "@/store/modal";

export function useManage() {
  const cropperRef = useRef<CropperRef>();
  const images = useAtomValue(imagesAtom);
  const [cropImageSelected, setCropImageSelected] = useAtom(cropImageSelectedAtom);

  const imageURL = useMemo(() => {
    const file = images.find((f) => f.id === cropImageSelected);
    return file?.previewImageURL;
  }, [images, cropImageSelected]);

  const handleCrop = () => {
    const payload = convertToBlob(cropperRef.current);
    if (!payload) return;

    const { blob } = payload;

    const file = new File([blob], "crop", { type: "image/jpeg" });
    console.log({ file });

    setCropImageSelected(null);
  };

  const handleCancel = () => {
    setCropImageSelected(null);
  };

  return { imageURL, handleCrop, handleCancel, cropperRef };
}
