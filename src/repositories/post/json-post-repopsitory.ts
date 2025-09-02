import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { readFile } from "fs/promises";
import { resolve } from "path";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(ROOT_DIR, "src", "db", "posts.json");

class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const data = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const { posts } = JSON.parse(data);
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    return this.readFromDisk();
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const filteredPost = posts.find((post) => post.id === id);
    if (!filteredPost) throw new Error("Post not found");
    return filteredPost;
  }
}

export const postRepository = new JsonPostRepository();
