import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublic } from "@/lib/post/queries";

export async function PostsList() {
  const posts = (await findAllPublic()).slice(1);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div
            key={post.id}
            className="flex flex-col p-4 gap-8 border-b border-gray-200 group"
          >
            <PostCoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                src: post.coverImageUrl,
                width: 800,
                height: 400,
                alt: post.title,
              }}
            />

            <PostSummary
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
              postLink={postLink}
            />

          </div>
        );
      })}
    </section>
  );
}
