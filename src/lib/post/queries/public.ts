import { postRepository } from "@/repositories/post/";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";
import { PostModel } from "@/models/post/post-model";

export const findAllPublicCached = unstable_cache(
  cache(async (): Promise<PostModel[]> => {
    return await postRepository.findAllPublic();
  }),
  ["posts"],
  {
    tags: ["posts"],
  },
);

export const findPublicPostBySlugCached = (slug: string): Promise<PostModel> =>
  unstable_cache(
    cache(async (slug: string) => {
      const post = await postRepository.findBySlug(slug).catch(() => undefined);
      if (!post) notFound();

      return post;
    }),
    ["posts"],
    {
      tags: [`posts-${slug}`],
    },
  )(slug);
