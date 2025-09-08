import { PostRepository } from "@/repositories/post/post-repository";
import { JsonPostRepository } from "./json-post-repository";

export const postRepository: PostRepository = new JsonPostRepository();
