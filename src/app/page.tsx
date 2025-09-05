import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { PostHeading } from "@/components/PostHeading";

export default async function Home() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="">
          <Image priority className="w-full h-full object-cover group-hover:scale-105 transition" src="/images/bryen_0.png" alt="Imagem do post" width={1200} height={500}/>
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-400 text-sm" dateTime="2025-04-20">20/04/2025 10:00</time>

          <PostHeading as="h1" href="#">Título do post</PostHeading>

          <p>Lorem ipsum dolor sit,
          Necessitatibus, illo impedit eligendi mollitia assumenda dolorum obcaecati commodi enim ullam ducimus, velit fugiat ea esse corrupti error, sunt illum optio alias maiores. Ullam voluptatum magni perspiciatis corporis aliquid optio.</p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer className="text-6xl font-bold">Footer</footer>
    </Container>
  );
}
