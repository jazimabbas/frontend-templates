import { useMemo, useRef } from "react";
import { RiCloseLine } from "@remixicon/react";
import { Button } from "@repo/ui-components/Button";
import { CircleStencil, Cropper, CropperRef } from "react-advanced-cropper";
import { convertToBlob } from "./helpers";
import { useImageUpload, useImageUploadUpdate } from "../Providers";
import { Actions, Header, ImageWrapper } from "./Client";

export function CropImage() {
  const cropperRef = useRef<CropperRef>();
  const dispatch = useImageUploadUpdate();
  const { files, cropImageSelected } = useImageUpload();

  const imageURL = useMemo(() => {
    const file = files.find((f) => f.id === cropImageSelected);
    return file?.previewImageURL;
  }, [files, cropImageSelected]);

  const handleCrop = () => {
    const payload = convertToBlob(cropperRef.current);
    if (!payload) return;

    const { blob } = payload;

    const file = new File([blob], "crop", { type: "image/jpeg" });
    console.log({ file });

    dispatch({ type: "UPDATE_CROP_IMAGE_SELECTED", payload: null });
  };

  const handleCancel = () => {
    dispatch({ type: "UPDATE_CROP_IMAGE_SELECTED", payload: null });
  };

  if (!imageURL) return <></>;

  return (
    <>
      <Header>
        <h5>Crop your picture</h5>
        <Button size="2xl" variant="link:gray" iconOnly icon={RiCloseLine} onClick={handleCancel} />
      </Header>
      <ImageWrapper>
        <Cropper
          ref={cropperRef as any}
          src={imageURL}
          stencilComponent={CircleStencil}
          minWidth={1000}
          maxWidth={1500}
        />
      </ImageWrapper>
      <Actions>
        <Button variant="secondary" size="lg" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="primary" size="lg" onClick={handleCrop}>
          Confirm
        </Button>
      </Actions>
    </>
  );
}
