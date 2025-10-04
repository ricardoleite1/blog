import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { readFile } from "fs/promises";
import { resolve } from "path";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(ROOT_DIR, "src", "db", "posts.json");
console.log(JSON_POSTS_FILE_PATH);
const SIMULATE_WAIT_IN_MS = 0;
export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const data = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const { posts } = JSON.parse(data);
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts.filter((post) => post.published);
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const filteredPost = posts.find((post) => post.id === id);
    if (!filteredPost) throw new Error("Post not found");
    return filteredPost;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const filteredPost = posts.find((post) => post.slug === slug);
    if (!filteredPost) throw new Error("Post not found");
    return filteredPost;
  }

  async delete(id: string): Promise<void> {
    console.log(id);
    // implementation
  }
}

export const postRepository: PostRepository = new JsonPostRepository();
