"use client";
import { RiCloseLine } from "@remixicon/react";
import { Backdrop, Modal } from "@mui/material";
import { Button } from "@repo/ui-components/Button";
import { Upload } from "./UploadSection";
import { backdropSxProps, CardsWrapper, Header, Wrapper } from "./Client";
import { ProgressCard } from "../ProgressCard";

export function ImageUploadModal() {
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
        <Upload />

        <CardsWrapper>
          <ProgressCard />
        </CardsWrapper>
      </Wrapper>
    </Modal>
  );
}
