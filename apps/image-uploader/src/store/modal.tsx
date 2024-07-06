import { atom } from "jotai";
import { atomWithImmer } from "jotai-immer";
import { Optional } from "@/utils/types";

type UploadStatus = "IN_PROGRESS" | "UPLOADED" | "ERROR" | "JUST_UPLOADED" | "PROCESSING";

export type UploadedFile = {
  id: string;
  upload?: {
    status: UploadStatus;
    progress: number;
    erorrMessage?: string;
  };
  inputFile?: File;
  api?: {
    filename: string;
    fileSize: number;
    fileURL: string;
  };
  previewImageURL?: string;
};

export const imageSelectedAtom = atom<Optional<string>>(null);
imageSelectedAtom.debugLabel = "ImageSelectedAtom";

export const cropImageSelectedAtom = atom<Optional<string>>(null);
cropImageSelectedAtom.debugLabel = "CropImageSelectedAtom";

export const imagesAtom = atomWithImmer<UploadedFile[]>([]);
imagesAtom.debugLabel = "ImagesAtom";
