import { useRef, useState } from "react";
import { Button } from "@repo/ui-components/Button";
import { CircleStencil, Cropper, CropperRef } from "react-advanced-cropper";
import { Actions, ImageWrapper } from "./Client";

export function CropImage() {
  const cropperRef = useRef<CropperRef>();
  const [output, setOutput] = useState<any>();

  const handleCrop = () => {
    const imageURL = cropperRef.current?.getCanvas()?.toDataURL();
    setOutput(imageURL as any);

    const blob = dataURItoBlob(imageURL);
    console.log({ blob });
    const file = new File([blob], "crop", { type: "image/jpeg" });
    console.log({ file });
  };

  function dataURItoBlob(dataURI: any) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(",")[1]);

    // separate out the mime component
    var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

  return (
    <>
      <ImageWrapper>
        <Cropper
          ref={cropperRef as any}
          src="/images/jazim.jpeg"
          stencilComponent={CircleStencil}
          minWidth={1000}
          maxWidth={1500}
        />
      </ImageWrapper>
      <Actions>
        <Button variant="secondary" size="lg">
          Cancel
        </Button>
        <Button variant="primary" size="lg" onClick={handleCrop}>
          Confirm
        </Button>
      </Actions>
      {output && (
        <div>
          <img src={output} />
        </div>
      )}
    </>
  );
}
