type UploadImageActionResult = {
  error: boolean;
  url: string;
};

export async function uploadImageAction(
  formData: FormData,
): Promise<UploadImageActionResult> {
  const makeResult = ({ url = "", error = false }) => ({ url, error });

  if (!(formData instanceof FormData)) {
    return makeResult({ error: true });
  }

  const file = formData.get("file");

  if (!(file instanceof File)) {
    return makeResult({ error: true });
  }

  const fileSize = Math.round(file.size / 1000);

  if (fileSize >= 1000) {
    return makeResult({ error: true });
  }

  return makeResult({ url: "https://example.com/image.jpg" });
}
