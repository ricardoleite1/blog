import { PostRepository } from "@/repositories/post/post-repository";
import { DrizlePostRepository } from "./drizzle-post-repository";

export const postRepository: PostRepository = new DrizlePostRepository();
