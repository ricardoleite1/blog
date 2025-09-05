import Link from "next/link";

type PostHeadingProps = {
  children?: React.ReactNode;
  href: string;
  as?: "h1" | "h2";
};

export function PostHeading({ children, href, as: HeadingTag = "h2" }: PostHeadingProps) {
  return (
    <HeadingTag className="text-2xl/tight font-extrabold sm:text-4xl md:text-5xl mb-4">
      <Link href={href}>{children}</Link>
    </HeadingTag>
  );
}
