// src/api/services/fileService.ts
import api from "./api";

export interface FileUploadResponse {
  fileName: string;
  path: string;
  size: number;
  uploadedAt: string;
}

export const fileService = {
  uploadFiles: async (name: string, files: File[]): Promise<void> => {
    const formData = new FormData();
    formData.append("forUserName", name);
    files.forEach((file) => {
      formData.append("files", file);
    });

    await api
      .post("/File/upload", formData)
      .then(() => {
        alert("Записано фоточки, топчик!");
      })
      .catch((error) => {
        alert(error);
      });
  },
};
