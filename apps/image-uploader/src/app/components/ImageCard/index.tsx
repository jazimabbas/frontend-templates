import { RiCheckLine, RiCloseLine, RiDeleteBin3Line } from "@remixicon/react";
import { Button } from "@repo/ui-components/Button";
import { Card } from "../Card";
import { useManage } from "./useManage";
import { State } from "@/app/helpers/reducer";
import { Radio } from "../InitialCard/Client";
import { Progress, ProgressCount, ProgressWrapper, ProgressIndicatorWrapper } from "./Client";

export function ImageCard(props: State) {
  const { previewImageURL, inputFile, upload } = props;

  const { fileSize, justUploaded } = useManage(props);

  const renderTrailing = () => {
    if (upload?.status === "IN_PROGRESS" || justUploaded) {
      return <Button variant="link:gray" size="xl" iconOnly icon={RiCloseLine} />;
    }
    return <Radio type="radio" name="testing" />;
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
        <Button
          size="md"
          variant="link:gray"
          leftIcon={RiDeleteBin3Line}
          sx={{ width: "fit-content" }}
        >
          Delete
        </Button>
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
