"use client";
import { useMemo, useState } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import { useImageUpload } from "../Providers";

export function CropImage() {
  const [crop, setCrop] = useState<Crop>();
  const { cropImageSelected, files } = useImageUpload();

  const imageURL = useMemo(() => {
    const file = files.find((f) => f.id === cropImageSelected);
    return file?.previewImageURL;
  }, [cropImageSelected, files]);

  if (!imageURL) return <></>;

  return (
    <ReactCrop
      circularCrop
      keepSelection
      aspect={1}
      minWidth={200}
      crop={crop}
      onChange={(c) => setCrop(c)}
    >
      <img src={imageURL} width={400} height={400} />
    </ReactCrop>
  );
}
