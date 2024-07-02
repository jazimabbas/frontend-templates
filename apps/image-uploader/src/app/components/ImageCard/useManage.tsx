import { useAtom } from "jotai";
import { useMemo, useEffect } from "react";
import { formatFileSize } from "./helpers";
import { imagesAtom, UploadedFile } from "@/store/modal";

export function useManage({ inputFile, upload, id }: UploadedFile) {
  const [images, setImages] = useAtom(imagesAtom);

  const fileSize = useMemo(() => {
    return formatFileSize(inputFile?.size ?? 0);
  }, [inputFile]);

  useEffect(() => {
    if (upload?.status !== "JUST_UPLOADED") return;

    const idx = images.findIndex((image) => image.id === id);
    const isImageFound = idx !== -1;
    if (!isImageFound) return;

    const timeoutId = setTimeout(() => {
      setImages((draft) => {
        draft[idx]!.upload!.status = "UPLOADED";
      });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [upload?.status, images, id, setImages]);

  return { fileSize };
}
