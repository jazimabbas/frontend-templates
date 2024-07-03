import { useSetAtom } from "jotai";
import Stack from "@mui/material/Stack";
import { Button } from "@repo/ui-components/Button";
import { RiCheckLine, RiCloseLine, RiDeleteBin3Line } from "@remixicon/react";

import { Card } from "../Card";
import { useManage } from "./useManage";
import { Optional } from "@/utils/types";
import { Radio } from "../InitialCard/Client";
import { cropImageSelectedAtom, imageSelectedAtom, UploadedFile } from "@/store/modal";
import { Progress, ProgressCount, ProgressWrapper, ProgressIndicatorWrapper } from "./Client";

type Props = UploadedFile & { currentSelected: Optional<string> };

export function ImageCard(props: Props) {
  const { fileSize } = useManage(props);
  const setImageSelected = useSetAtom(imageSelectedAtom);
  const setCropImageSelected = useSetAtom(cropImageSelectedAtom);

  const { previewImageURL, inputFile, upload, id, currentSelected } = props;
  const isSelected = currentSelected === id;

  const handleCrop = () => {
    setImageSelected(null);
    setCropImageSelected(id);
  };

  const renderTrailing = () => {
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
  };

  const renderChildren = () => {
    if (upload?.status === "IN_PROGRESS") {
      return (
        <ProgressWrapper>
          <ProgressIndicatorWrapper>
            <Progress color="inherit" variant="determinate" value={27} />
          </ProgressIndicatorWrapper>
          <ProgressCount>27%</ProgressCount>
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
  };

  return (
    <Card
      imgSrc={previewImageURL!}
      filename={inputFile?.name!}
      fileSize={fileSize}
      trailing={renderTrailing()}
      hasError={upload?.status === "ERROR"}
      errorMessage={upload?.erorrMessage}
    >
      {renderChildren()}
    </Card>
  );
}
