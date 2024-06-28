import Stack from "@mui/material/Stack";
import { Button } from "@repo/ui-components/Button";
import { RiCheckLine, RiCloseLine, RiDeleteBin3Line } from "@remixicon/react";

import { Card } from "../Card";
import { State } from "../Providers";
import { useManage } from "./useManage";
import { Radio } from "../InitialCard/Client";
import { Progress, ProgressCount, ProgressWrapper, ProgressIndicatorWrapper } from "./Client";

type Props = State & { onSelected: any; currentSelected?: string };

export function ImageCard(props: Props) {
  const { previewImageURL, inputFile, upload, currentSelected, id, onSelected } = props;
  const isSelected = currentSelected === id;

  const { fileSize, justUploaded } = useManage(props);

  const renderTrailing = () => {
    if (upload?.status === "IN_PROGRESS" || justUploaded) {
      return <Button variant="link:gray" size="xl" iconOnly icon={RiCloseLine} />;
    }
    return (
      <Radio
        type="radio"
        name="imageCard"
        value={id}
        onChange={(e) => onSelected(e.target.value)}
      />
    );
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

    if (justUploaded)
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
    >
      {renderChildren()}
    </Card>
  );
}
