import Link from "next/link";

type PostHeadingProps = {
  children?: React.ReactNode;
  href: string;
  as?: "h1" | "h2";
};

export function PostHeading({ children, href, as: HeadingTag = "h2" }: PostHeadingProps) {
  const headingClassesMap = {
    h1: "text-4xl/tight font-extrabold sm:text-5xl md:text-6xl mb-6",
    h2: "text-2xl/tight font-bold",
  }

  return (
    <HeadingTag className={headingClassesMap[HeadingTag] }>
      <Link className="hover:text-blue-200 transition-colors" href={href}>{children}</Link>
    </HeadingTag>
  );
}
