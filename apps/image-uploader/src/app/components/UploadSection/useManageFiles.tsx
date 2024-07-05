"use client";
import { useSetAtom } from "jotai";
import { genUploader } from "uploadthing/client";
import { imagesAtom, UploadedFile } from "@/store/modal";
import { OurFileRouter } from "@/app/api/uploadthing/core";

const uploadFiles = genUploader<OurFileRouter>({
  package: "vanilla",
  url: "/",
});

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

      if (updatedFiles.length > 0) {
        await uploadFile(updatedFiles[0]?.inputFile!);
      }
    }
  };

  const checkFileDimensions = async (file: File): Promise<FileDimensionResponse> => {
    const isAllowedFormat = ALLOWED_FILE_FORMATS.includes(file.type);
    if (!isAllowedFormat) {
      return {
        type: "error",
        message: `Only allowed JPG or PNG file format. Current file format is ${file.type}`,
      };
    }

    return new Promise<FileDimensionResponse>((resolve) => {
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

  const uploadFile = async (file: File) => {
    try {
      const response = await uploadFiles("imageUploader", {
        files: [file],
        onUploadProgress({ file, progress }) {
          console.log({ file, progress });
        },
      });
      console.log("response", response);
    } catch (err) {
      console.log("Error", err);
    }
  };

  return handleChangeFiles;
}

const MIN_DIMENSION = 160;
const ALLOWED_FILE_FORMATS = ["image/png", "image/jpeg"];

type FileDimensionResponse = { type: "success" | "error"; message?: string };
