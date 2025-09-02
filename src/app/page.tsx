import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <header className="text-6xl font-bold">Blog</header>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </div>
  );
}
