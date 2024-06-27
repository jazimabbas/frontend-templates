"use client";
import { RiCloseLine } from "@remixicon/react";
import { Backdrop, Modal } from "@mui/material";
import { Button } from "@repo/ui-components/Button";
import { Upload } from "./UploadSection";
import { InitialCard } from "../InitialCard";
import { SuccessCard } from "../SuccessCard";
import { ProgressCard } from "../ProgressCard";
import { backdropSxProps, CardsWrapper, Header, Wrapper } from "./Client";

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
          <InitialCard />
          <SuccessCard />
        </CardsWrapper>
      </Wrapper>
    </Modal>
  );
}
