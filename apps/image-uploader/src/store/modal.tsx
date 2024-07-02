import { atom } from "jotai";
import { Optional } from "@/utils/types";

type UploadStatus = "IN_PROGRESS" | "UPLOADED" | "ERROR" | "JUST_UPLOADED";

export type UploadedFile = {
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

export const imageSelectedAtom = atom<Optional<string>>(null);

export const cropImageSelectedAtom = atom<Optional<string>>(null);

export const imagesAtom = atom<UploadedFile[]>([]);
