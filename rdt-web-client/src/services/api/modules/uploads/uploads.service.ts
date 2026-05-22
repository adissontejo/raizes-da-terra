import { api } from "../../client";
import type { UploadImageResponseDTO } from "./dtos/upload-image-response.dto";

export class UploadsService {
  public static async uploadImage(
    image: File,
  ): Promise<UploadImageResponseDTO> {
    const formData = new FormData();

    formData.append("image", image);

    const { data } = await api.post<UploadImageResponseDTO>(
      "/uploads",
      formData,
    );

    return data;
  }
}
