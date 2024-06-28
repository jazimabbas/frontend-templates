import { Dispatch } from "react";
import { RiCloseLine } from "@remixicon/react";
import { Button } from "@repo/ui-components/Button";
import { Header } from "./Client";
import { CardList } from "../CardList";
import { Upload } from "./UploadSection";
import { Action, State } from "@/app/helpers/reducer";

export function UploadModalContent({
  dispatch,
  state,
}: {
  dispatch: Dispatch<Action>;
  state: State[];
}) {
  return (
    <>
      <Header>
        <h4>Upload image(s)</h4>
        <Button size="2xl" variant="link:gray" iconOnly icon={RiCloseLine} />
      </Header>
      <p>You may upload up to 5 images</p>
      <Upload dispatch={dispatch} />
      <CardList files={state} />
    </>
  );
}
