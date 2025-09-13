import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkdownProps = {
  markdown: string;
}

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div className="prose prose-white dark:prose-invert w-full max-w-none overflow-hidden md:prose-lg prose-img:mx-auto prose-a:text-blue-400 prose-a:hover:text-blue-500 prose-a:transition">
      <ReactMarkdown rehypePlugins={[rehypeSanitize]} remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
