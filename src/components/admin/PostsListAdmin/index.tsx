import { findAllPostsAdmin } from "@/lib/post/queries/admin";
import Link from "next/link";
import { DeletePostButton } from "../DeletePostButton";

export async function PostsListAdmin() {
  const posts = await findAllPostsAdmin();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => {
        return (
          <div
            className={
              post.published
                ? "bg-green-400 p-3 rounded pointer"
                : "bg-red-400 p-3 rounded pointer"
            }
            key={post.id}
          >
            <Link className="text-black" href={`/admin/post/${post.id}`}>
              {post.title}
            </Link>
            {post.published ? (
              <div className="flex items-center justify-between">
                <p className="text-green-800 text-xs italic mt-2">Published</p>
                <DeletePostButton id={post.id} />
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <p className="text-red-800 text-xs italic mt-2">Draft</p>
                <DeletePostButton id={post.id} />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
