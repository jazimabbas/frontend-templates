import { produce } from "immer";
import { Optional } from "@/utils/types";

type UploadStatus = "IN_PROGRESS" | "UPLOADED" | "ERROR";

export type FileState = {
  id: string;
  upload?: {
    status: UploadStatus;
    progress: number;
  };
  inputFile?: File;
  api?: {
    filename: string;
    fileSize: string;
    fileURL: string;
  };
  previewImageURL?: string;
};

export type State = {
  files: FileState[];
  currentSelected: Optional<string>;
};

export type Action =
  | {
      type: "UPLOAD_FILES";
      payload: File[];
    }
  | {
      type: "UPDATE_CURRENT_SELECTED";
      payload: string | null;
    };

export function reducer(state: State, action: Action) {
  return produce(state, (draftState) => {
    const { type, payload } = action;

    if (type === "UPLOAD_FILES") {
      const updatedFiles = payload.map(
        (file, idx): FileState => ({
          id: idx.toString(),
          inputFile: file,
          upload: { status: "UPLOADED", progress: 0 },
          previewImageURL: URL.createObjectURL(file),
        })
      );
      draftState.files = updatedFiles;
      return;
    } else if (type === "UPDATE_CURRENT_SELECTED") {
      draftState.currentSelected = payload;
      return;
    }

    return state;
  });
}
