"use client";

import { uploadImageAction } from "@/actions/upload-image-actions";
import { Button } from "@/components/Button";
import { ImageUpIcon } from "lucide-react";
import { useEffect, useRef, useTransition } from "react";
import { toast } from "react-toastify";

export function ImageUploader() {
  const input = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition(false);

  const handleUpload = () => {
    if (!input.current) return;
    input.current.click();
  };

  const handleUploadedImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    const fileSize = Math.round(file.size / 1000);

    if (fileSize >= 1000) {
      toast.error("O arquivo é muito grande");
      event.target.value = "";
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error("Erro ao enviar imagem");
        return;
      }

      toast.success(result.url);
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={handleUpload} className="self-start" type="button">
        <ImageUpIcon />
        Enviar uma imagem
      </Button>
      <input
        onChange={handleUploadedImage}
        ref={input}
        className="hidden"
        name="file"
        type="file"
        accept="image/*"
      />
    </div>
  );
}
