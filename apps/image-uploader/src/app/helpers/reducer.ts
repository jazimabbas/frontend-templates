import { produce } from "immer";

type UploadStatus = "IN_PROGRESS" | "UPLOADED" | "ERROR";

export type State = {
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

export type Action = {
  type: "UPLOAD_FILES";
  payload: File[];
};

export function reducer(state: State[], action: Action) {
  return produce(state, () => {
    const { type, payload } = action;

    if (type === "UPLOAD_FILES") {
      return payload.map(
        (file, idx): State => ({
          id: idx.toString(),
          inputFile: file,
          upload: { status: "UPLOADED", progress: 0 },
          previewImageURL: URL.createObjectURL(file),
        })
      );
    }

    return state;
  });
}
