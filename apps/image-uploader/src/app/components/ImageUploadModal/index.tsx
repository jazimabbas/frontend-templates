"use client";
import { useState } from "react";
import { RiCloseLine } from "@remixicon/react";
import { Backdrop, Modal } from "@mui/material";
import { Button } from "@repo/ui-components/Button";
import { Upload } from "./UploadSection";
import { ProgressCard } from "../ProgressCard";
import { Actions, backdropSxProps, CardsWrapper, Header, Wrapper } from "./Client";

export function ImageUploadModal() {
  const [files, setFiles] = useState<FileList[]>([]);

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

        {files && files.length > 0 && (
          <CardsWrapper>
            {files.map((_, idx) => (
              <ProgressCard key={idx} />
            ))}

            <Actions>
              <Button variant="secondary" size="lg">
                Cancal
              </Button>
              <Button variant="primary" size="lg">
                Select image
              </Button>
            </Actions>
          </CardsWrapper>
        )}
      </Wrapper>
    </Modal>
  );
}
