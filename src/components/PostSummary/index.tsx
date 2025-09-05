import { formatDateTime } from "@/utils/format-datetime";
import { PostHeading } from "../PostHeading";

type PostSummaryProps = {
  createdAt: string;
  title: string;
  excerpt: string;
  postLink: string;
}

export function PostSummary({ createdAt, title, excerpt, postLink }: PostSummaryProps ) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        className="text-slate-400 text-sm"
        dateTime={formatDateTime(createdAt)}
      >
        {formatDateTime(createdAt)}
      </time>

      <PostHeading as="h2" href={postLink}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
