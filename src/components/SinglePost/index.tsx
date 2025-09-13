import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { formatDateTime } from "@/utils/format-datetime";
import { PostDate } from "../PostDate";
import { SafeMarkdown } from "../SafeMarkdown";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <article className="mb-16">
      <header className="flex flex-col group gap-4 mb-4">
        <Image
          className="rounded-xl"
          src={post.coverImageUrl}
          alt={post.title}
          width={1000}
          height={600}
        />
        <PostHeading href="#">{post.title}</PostHeading>
        <p>
          {post.author} | <PostDate date={post.createdAt} />
        </p>
      </header>

      <SafeMarkdown markdown={post.content} />
    </article>
  );
}
