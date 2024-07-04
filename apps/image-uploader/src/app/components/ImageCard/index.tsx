import { Card } from "../Card";
import { Trailing } from "./Trailing";
import { useManage } from "./useManage";
import { Optional } from "@/utils/types";
import { UploadedFile } from "@/store/modal";
import { ChildrenSlot } from "./ChildrenSlot";

type Props = UploadedFile & { currentSelected: Optional<string> };

export function ImageCard(props: Props) {
  const { fileSize } = useManage(props);

  const { previewImageURL, inputFile, upload, id, currentSelected } = props;
  const isSelected = currentSelected === id;

  return (
    <Card
      imgSrc={previewImageURL!}
      filename={inputFile?.name!}
      fileSize={fileSize}
      trailing={<Trailing id={id} upload={upload} />}
      hasError={upload?.status === "ERROR"}
      errorMessage={upload?.erorrMessage}
    >
      <ChildrenSlot {...props} isSelected={isSelected} />
    </Card>
  );
}
