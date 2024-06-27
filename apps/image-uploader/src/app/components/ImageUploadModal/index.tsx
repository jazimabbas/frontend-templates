"use client";
import { useState } from "react";
import { RiCloseLine } from "@remixicon/react";
import { Backdrop, Modal } from "@mui/material";
import { Button } from "@repo/ui-components/Button";
import { CardList } from "../CardList";
import { Upload } from "./UploadSection";
import { backdropSxProps, Header, Wrapper } from "./Client";

export function ImageUploadModal() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <Modal
      open
      onClose={() => console.log("modal closed")}
      slots={{ backdrop: Backdrop }}
      sx={{ margin: "15px" }}
      slotProps={{
        backdrop: {
          sx: backdropSxProps,
        },
      }}
    >
      <Wrapper>
        <Header>
          <h4>Upload image(s)</h4>
          <Button size="2xl" variant="link:gray" iconOnly icon={RiCloseLine} />
        </Header>
        <p>You may upload up to 5 images</p>
        <Upload onSetFiles={setFiles} />

        <CardList files={files} />
      </Wrapper>
    </Modal>
  );
}
