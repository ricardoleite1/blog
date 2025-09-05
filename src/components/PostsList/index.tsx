import { postRepository } from "@/repositories/post/json-post-repopsitory";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => {
        const postLink = `/post/${post.slug

        }`;

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
            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                className="text-slate-400 text-sm"
                dateTime={post.createdAt}
              >
                {post.createdAt}
              </time>

              <PostHeading as="h2" href={postLink}>
                {post.title}
              </PostHeading>

              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
