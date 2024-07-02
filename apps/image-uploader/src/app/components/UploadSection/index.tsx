import { useRef } from "react";

import { UploadIcon } from "./Icon";
import { ModalCard } from "../ModalCard";
import { useManageFiles } from "./useManageFiles";
import { Title, Subtitle, IconWrapper } from "./Client";

export function UploadSection() {
  const ref = useRef<any>(null);
  const handleChangeFiles = useManageFiles();

  return (
    <>
      <input
        type="file"
        multiple
        ref={ref}
        style={{ display: "none" }}
        onChange={handleChangeFiles}
      />
      <ModalCard className="pointer" onClick={() => ref.current.click()}>
        <IconWrapper>
          <UploadIcon />
        </IconWrapper>
        <Title>Click or drag and drop to upload</Title>
        <Subtitle>PNG, or JPG (Max 5MB)</Subtitle>
      </ModalCard>
    </>
  );
}
