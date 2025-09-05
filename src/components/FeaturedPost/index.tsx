import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function FeaturedPost() {
  const slug = "titulo-do-post"
  const postLink = `/post/${slug}`

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 group">
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          priority: true,
          src: "/images/bryen_0.png",
          width: 1200,
          height: 500,
          alt: "Imagem do post",
        }}
      />
      <div className="flex flex-col gap-4 sm:justify-center">
        <time className="text-slate-400 text-sm" dateTime="2025-04-20">
          20/04/2025 10:00
        </time>

        <PostHeading as="h1" href={postLink}>
          Título do post
        </PostHeading>

        <p>
          Lorem ipsum dolor sit, Necessitatibus, illo impedit eligendi mollitia
          assumenda dolorum obcaecati commodi enim ullam ducimus, velit fugiat
          ea esse corrupti error, sunt illum optio alias maiores. Ullam
          voluptatum magni perspiciatis corporis aliquid optio.
        </p>
      </div>
    </section>
  );
}
