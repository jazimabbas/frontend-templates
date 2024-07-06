import { useSetAtom } from "jotai";
import Stack from "@mui/material/Stack";
import { Button } from "@repo/ui-components/Button";
import { RiCheckLine, RiDeleteBin3Line } from "@remixicon/react";

import { cropImageSelectedAtom, imageSelectedAtom, UploadedFile } from "@/store/modal";
import { Progress, ProgressCount, ProgressIndicatorWrapper, ProgressWrapper } from "./Client";

type Props = UploadedFile & { isSelected: boolean };

export function ChildrenSlot({ upload, isSelected, id }: Props) {
  const setImageSelected = useSetAtom(imageSelectedAtom);
  const setCropImageSelected = useSetAtom(cropImageSelectedAtom);

  const handleCrop = () => {
    setImageSelected(null);
    setCropImageSelected(id);
  };

  if (upload?.status === "IN_PROGRESS") {
    return (
      <ProgressWrapper>
        <ProgressIndicatorWrapper>
          <Progress color="inherit" variant="determinate" value={upload.progress} />
        </ProgressIndicatorWrapper>
        <ProgressCount>{upload.progress}%</ProgressCount>
      </ProgressWrapper>
    );
  }

  if (upload?.status === "JUST_UPLOADED")
    return (
      <Button
        as="p"
        size="md"
        variant="link:gray"
        leftIcon={RiCheckLine}
        sx={{ width: "fit-content", color: "var(--color-success-700)", cursor: "default" }}
      >
        Upload success!
      </Button>
    );
  else if (upload?.status === "UPLOADED") {
    return (
      <Stack direction="row" gap="10px">
        {isSelected && (
          <>
            <Button
              size="md"
              variant="link:gray"
              leftIcon={RiDeleteBin3Line}
              sx={{ width: "fit-content" }}
              onClick={handleCrop}
            >
              Crop
            </Button>
            <span>•</span>
          </>
        )}

        <Button
          size="md"
          variant="link:gray"
          leftIcon={RiDeleteBin3Line}
          sx={{ width: "fit-content" }}
        >
          Delete
        </Button>
      </Stack>
    );
  }
}
