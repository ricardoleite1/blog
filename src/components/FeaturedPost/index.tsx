import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { formatDateTime } from "@/utils/format-datetime";
import { findAllPublicCached } from "@/lib/post/queries/public";

export async function FeaturedPost() {
  const posts = await findAllPublicCached();
  if (!posts) return null;
  const post = posts[0];
  const postLink = `/post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 group">
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          priority: true,
          src: post.coverImageUrl,
          width: 1200,
          height: 500,
          alt: post.title,
        }}
      />
      <div className="flex flex-col gap-4 sm:justify-center">
        <time className="text-slate-400 text-sm" dateTime={post.createdAt}>
          {formatDateTime(post.createdAt)}
        </time>

        <PostHeading as="h1" href={postLink}>
          {post.title}
        </PostHeading>

        <p>{post.excerpt}</p>
      </div>
    </section>
  );
}
