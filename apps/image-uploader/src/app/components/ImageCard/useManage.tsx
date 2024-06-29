import { useState, useMemo, useEffect } from "react";
import { formatFileSize } from "./helpers";
import { State } from "@/app/helpers/reducer";

export function useManage({ inputFile, upload }: State) {
  const [justUploaded, setJustUploaded] = useState(false);

  const fileSize = useMemo(() => {
    return formatFileSize(inputFile?.size ?? 0);
  }, [inputFile]);

  useEffect(() => {
    if (upload?.status !== "UPLOADED") return;

    setJustUploaded(true);

    const timeoutId = setTimeout(() => {
      setJustUploaded(false);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [upload?.status]);

  return { justUploaded, fileSize };
}
