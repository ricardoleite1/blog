import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { formatDateTime } from "@/utils/format-datetime";

type SinglePostProps = {
  slug: string;
}

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <article>
      <header>
        <Image src={post.coverImageUrl} alt={post.title} width={600} height={400} />
        <PostHeading href="#">{post.title}</PostHeading>
      </header>

      <p>{post.author} | {formatDateTime(post.createdAt)}</p>

    </article>
  )
}
