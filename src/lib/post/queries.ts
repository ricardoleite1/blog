import { postRepository } from "@/repositories/post/json-post-repopsitory";
import { cache } from "react";

export const findAllPublic = cache(async () => await postRepository.findAllPublic());
