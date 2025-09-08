import { postRepository } from "@/repositories/post/";
import { cache } from "react";

export const findAllPublicCached = cache(async () => await postRepository.findAllPublic());

export const findPostBySlugCached = cache(async (slug: string) => await postRepository.findBySlug(slug));
