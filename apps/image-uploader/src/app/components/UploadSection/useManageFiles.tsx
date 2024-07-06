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
          payload.upload = { status: "PROCESSING", progress: 0 };
        }

        return payload;
      });

      const updatedFiles = await Promise.all(updatedFilesPromise);
      setImages(updatedFiles);

      await uploadFilesToServer(updatedFiles);
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

  const uploadFilesToServer = async (files: UploadedFile[]) => {
    const promises = files.map(async (file) => {
      await uploadFile(file);
    });
    await Promise.all(promises);
  };

  const uploadFile = async (payload: UploadedFile) => {
    const file = payload.inputFile;
    if (!file) return;

    try {
      const [response] = await uploadFiles("imageUploader", {
        files: [file],
        onUploadBegin() {
          updateImageAtom(payload.id, { status: "UPLOADING", payload: { progressCount: 0 } });
        },
        onUploadProgress({ file, progress }) {
          console.log({ file, progress });
          updateImageAtom(payload.id, {
            status: "UPLOADING",
            payload: { progressCount: progress },
          });
        },
      });
      updateImageAtom(payload.id, {
        status: "UPLOADED",
        payload: {
          filename: response!.name,
          fileSize: response!.size,
          fileURL: response!.url,
        },
      });
      console.log("response", response);
    } catch (err: any) {
      console.log("Error", err);
      updateImageAtom(payload.id, { status: "ERROR", payload: { errorMessage: err.message } });
    }
  };

  const updateImageAtom = (id: string, data: UpdateImageAtomPayload) => {
    setImages((draft) => {
      const idx = draft.findIndex((image) => image.id === id);

      if (idx === -1) return draft;

      const { status, payload } = data;

      if (status === "UPLOADING") {
        draft[idx]!.upload = { status: "IN_PROGRESS", progress: payload.progressCount };
      } else if (status === "UPLOADED") {
        draft[idx]!.upload = { status: "JUST_UPLOADED", progress: 100 };
        draft[idx]!.api = payload;
        draft[idx]!.previewImageURL = payload?.fileURL;
      } else if (status === "ERROR") {
        draft[idx]!.upload = { status: "ERROR", progress: 0, erorrMessage: payload.errorMessage };
      }
    });
  };

  return handleChangeFiles;
}

const MIN_DIMENSION = 160;
const ALLOWED_FILE_FORMATS = ["image/png", "image/jpeg"];

type FileDimensionResponse = { type: "success" | "error"; message?: string };

type UpdateImageAtomPayload =
  | {
      status: "UPLOADING";
      payload: { progressCount: number };
    }
  | { status: "ERROR"; payload: { errorMessage: string } }
  | { status: "UPLOADED"; payload: Required<UploadedFile["api"]> };
