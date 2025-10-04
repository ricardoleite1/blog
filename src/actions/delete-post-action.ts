"use server";

import { postRepository } from "@/repositories/post";
import { asyncDelay } from "@/utils/async-delay";

export async function deletePostAction(id: string): Promise<{ error: string }> {
  await asyncDelay(2000);

  if (!id || typeof id !== "string") {
    return {
      error: "Não foi possível deletar o post",
    };
  }

  await postRepository.delete(id);

  return {
    error: "",
  };
}
