"use client";
import { useSetAtom } from "jotai";
import { imagesAtom, UploadedFile } from "@/store/modal";

const MIN_DIMENSION = 160;

export function useManageFiles() {
  const setImages = useSetAtom(imagesAtom);

  const handleChangeFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const filesArray = Array.from(files);
      const updatedFilesPromise = filesArray.map(async (file, idx): Promise<UploadedFile> => {
        const { type, message } = await checkFileDimensions(file);

        let payload = {
          id: idx.toString(),
          inputFile: file,
          previewImageURL: URL.createObjectURL(file),
        } as UploadedFile;

        if (type === "error") {
          payload.upload = { status: "ERROR", progress: 0, erorrMessage: message };
        } else {
          payload.upload = { status: "JUST_UPLOADED", progress: 0 };
        }

        return payload;
      });

      const updatedFiles = await Promise.all(updatedFilesPromise);
      setImages(updatedFiles);
    }
  };

  const checkFileDimensions = (file: File) => {
    return new Promise<{ type: "success" | "error"; message?: string }>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const { naturalWidth: width, naturalHeight: height } = img;

          if (width < MIN_DIMENSION || height < MIN_DIMENSION) {
            resolve({
              type: "error",
              message: `Dimensions should be atleast ${MIN_DIMENSION}x${MIN_DIMENSION}. Current Dimension is ${width}x${height}`,
            });
          } else {
            resolve({ type: "success" });
          }
        };
        img.src = reader.result!.toString();
      };
      reader.readAsDataURL(file);
    });
  };

  return handleChangeFiles;
}
