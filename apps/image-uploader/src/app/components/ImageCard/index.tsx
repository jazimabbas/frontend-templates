import { useEffect, useMemo, useState } from "react";
import { RiCheckLine, RiCloseLine, RiDeleteBin3Line } from "@remixicon/react";
import { Button } from "@repo/ui-components/Button";
import { Card } from "../Card";
import { State } from "@/app/helpers/reducer";
import { Progress, ProgressCount, ProgressWrapper, Wrapper } from "../ProgressCard/Client";
import { Radio } from "../InitialCard/Client";

export function ImageCard({ previewImageURL, inputFile, upload }: State) {
  let trailing: JSX.Element = <></>;
  let children: JSX.Element = <></>;
  const [justUploaded, setJustUploaded] = useState(false);

  if (upload?.status === "IN_PROGRESS") {
    trailing = <Button variant="link:gray" size="xl" iconOnly icon={RiCloseLine} />;
    children = (
      <Wrapper>
        <ProgressWrapper>
          <Progress color="inherit" variant="determinate" value={27} />
        </ProgressWrapper>
        <ProgressCount>27%</ProgressCount>
      </Wrapper>
    );
  }
  if (justUploaded) {
    trailing = <Button variant="link:gray" size="xl" iconOnly icon={RiCloseLine} />;
    children = (
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
  } else if (upload?.status === "UPLOADED") {
    trailing = <Radio type="radio" name="testing" />;
    children = (
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

  const fileSize = useMemo(() => {
    return formatFileSize(inputFile?.size ?? 0);
  }, [inputFile]);

  useEffect(() => {
    if (upload?.status !== "UPLOADED") return;

    setJustUploaded(true);

    const timeoutId = setTimeout(() => {
      setJustUploaded(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [upload?.status]);

  return (
    <Card
      imgSrc={previewImageURL!}
      filename={inputFile?.name!}
      fileSize={fileSize}
      trailing={trailing}
    >
      {children}
    </Card>
  );
}

function formatFileSize(bytes: number) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
}
