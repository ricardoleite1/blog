import { PostRepository } from "@/repositories/post/post-repository";
import { JsonPostRepository } from "./json-post-repopsitory";

export const postRepository: PostRepository = new JsonPostRepository();
