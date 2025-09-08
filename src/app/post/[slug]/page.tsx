import Link from "next/link";
import { findPostBySlugCached } from "@/lib/post/queries";
import { notFound } from "next/navigation";

type PostProps = {
  params: Promise<{ slug: string}>;
}

export default async function Post({ params }: PostProps) {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

  return (
    <div className="flex flex-col items-center justify-center min-h-100 text-center gap-8">
      <h1 className="text-7xl font-extrabold">404</h1>
      <p>{post.title}</p>

      <Link href="/">Voltar para a página inicial</Link>
    </div>
  );
}
