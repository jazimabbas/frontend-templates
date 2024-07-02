"use client";
import { useSetAtom } from "jotai";
import { imagesAtom, UploadedFile } from "@/store/modal";

export function useManageFiles() {
  const setImages = useSetAtom(imagesAtom);

  const handleChangeFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const filesArray = Array.from(files);
      const updatedFiles: UploadedFile[] = filesArray.map((file, idx) => ({
        id: idx.toString(),
        inputFile: file,
        upload: { status: "UPLOADED", progress: 0 },
        previewImageURL: URL.createObjectURL(file),
      }));

      setImages(updatedFiles);
    }
  };

  return handleChangeFiles;
}
