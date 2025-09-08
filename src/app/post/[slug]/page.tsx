import { postRepository } from "@/repositories/post/";
import Link from "next/link";

type Post = {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: Post) {
  const { slug } = params;

  const post = await postRepository.findBySlug(slug);
  console.log(post);

  return (
    <div className="flex flex-col items-center justify-center min-h-100 text-center gap-8">
      <h1 className="text-7xl font-extrabold">404</h1>
      <p>Página post</p>

      <Link href="/">Voltar para a página inicial</Link>
    </div>
  );
}
