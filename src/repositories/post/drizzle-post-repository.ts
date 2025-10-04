import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "../../db/drizzle/index";
import { postsTable } from "@/db/drizzle/schemas";
import { eq } from "drizzle-orm";

export class DrizlePostRepository implements PostRepository {
  async findAll(): Promise<PostModel[]> {
    return drizzleDb.query.posts.findMany();
  }

  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error("Post não encontrado!");

    return post;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error("Post não encontrado!");

    return post;
  }

  async delete(id: string): Promise<void> {
    await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));
  }
}
