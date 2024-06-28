"use client";
import { useReducer } from "react";
import { RiCloseLine } from "@remixicon/react";
import { Backdrop, Modal } from "@mui/material";
import { Button } from "@repo/ui-components/Button";
import { CardList } from "../CardList";
import { Upload } from "./UploadSection";
import { reducer } from "@/app/helpers/reducer";
import { backdropSxProps, Header, Wrapper } from "./Client";

export function ImageUploadModal() {
  const [state, dispatch] = useReducer(reducer, []);

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
        <Upload dispatch={dispatch} />

        <CardList files={state} />
      </Wrapper>
    </Modal>
  );
}
