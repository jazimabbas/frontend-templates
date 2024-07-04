import { useSetAtom } from "jotai";
import { RiCloseLine } from "@remixicon/react";
import { Button } from "@repo/ui-components/Button";

import { Radio } from "../InitialCard/Client";
import { imageSelectedAtom, UploadedFile } from "@/store/modal";

export function Trailing({ upload, id }: Pick<UploadedFile, "upload" | "id">) {
  const setImageSelected = useSetAtom(imageSelectedAtom);

  if (upload?.status === "UPLOADED")
    return (
      <Radio
        type="radio"
        name="imageCard"
        value={id}
        onChange={(e) => setImageSelected(e.target.value)}
      />
    );

  return <Button variant="link:gray" size="xl" iconOnly icon={RiCloseLine} />;
}
