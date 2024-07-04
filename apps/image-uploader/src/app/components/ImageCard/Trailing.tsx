import { useAtom, useSetAtom } from "jotai";
import { RiCloseLine } from "@remixicon/react";
import { Button } from "@repo/ui-components/Button";

import { Radio } from "../InitialCard/Client";
import { imagesAtom, imageSelectedAtom, UploadedFile } from "@/store/modal";

export function Trailing({ upload, id }: Pick<UploadedFile, "upload" | "id">) {
  const [images, setImages] = useAtom(imagesAtom);
  const setImageSelected = useSetAtom(imageSelectedAtom);

  const handleRemoveFile = () => {
    const imageIdx = images.findIndex((image) => image.id === id);
    const isImageFound = imageIdx !== -1;
    if (!isImageFound) return;

    setImages((draft) => {
      return draft.filter((image) => image.id !== id);
    });
  };

  if (upload?.status === "UPLOADED")
    return (
      <Radio
        type="radio"
        name="imageCard"
        value={id}
        onChange={(e) => setImageSelected(e.target.value)}
      />
    );

  return (
    <Button variant="link:gray" size="xl" iconOnly icon={RiCloseLine} onClick={handleRemoveFile} />
  );
}
