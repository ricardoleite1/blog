import Link from "next/link";

export async function Header() {
  return (
    <header>
      <h1 className="text-4xl font-extrabold py-8 sm:text-5xl sm:py-10 md:text-6xl">
        <Link href="/">Blog</Link>
      </h1>
    </header>
  );
}
