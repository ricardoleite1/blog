import { findPostBySlugCached } from "@/lib/post/queries";
import { Suspense } from "react";
import { SinglePost } from "@/components/SinglePost";
import { SpinLoader } from "@/components/SpinLoader";

type PostProps = {
  params: Promise<{ slug: string}>;
}

export default async function Post({ params }: PostProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoader />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
