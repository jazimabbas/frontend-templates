import { RiCloseLine } from "@remixicon/react";
import { Button } from "@repo/ui-components/Button";
import { CircleStencil, Cropper } from "react-advanced-cropper";

import { useManage } from "./useManage";
import { Actions, Header, ImageWrapper } from "./Client";

export function CropImage() {
  const { cropperRef, imageURL, handleCrop, handleCancel } = useManage();

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
