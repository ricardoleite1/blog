import Link from "next/link";

export function Footer() {
  return <footer className="text-1xl text-center py-10 sm:py-12">Copyright ©2001-{new Date().getFullYear()}. <Link href="/">Blog</Link></footer>;
}
