"use client";
import { useEffect, useState } from "react";
import { CircleXIcon, FileIcon, HouseIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navClasses = `bg-white text-slate-700 rounded-lg p-4 mb-6 ${!isOpen && "overflow-hidden h-14"}`;
  const listClasses = "flex flex-col items-center gap-4 sm:flex-row";
  const linkClasses =
    "flex items-center gap-2 hover:text-slate-900 transition cursor-pointer";

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={navClasses}>
      <ul className={listClasses}>
        <button className={listClasses} onClick={() => setIsOpen((s) => !s)}>
          {!isOpen && (
            <li className={linkClasses}>
              <MenuIcon size={16} />
              Menu
            </li>
          )}

          {isOpen && (
            <li className={linkClasses}>
              <CircleXIcon size={16} />
              Fechar
            </li>
          )}
        </button>

        <li>
          <a className={linkClasses} href="/" target="_blank">
            <HouseIcon size={16} />
            Home
          </a>
        </li>
        <li>
          <Link className={linkClasses} href="/admin/post">
            <FileIcon size={16} />
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
