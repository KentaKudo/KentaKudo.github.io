"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const Header: FC = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 px-4 backdrop-blur-sm">
      <div className="h-20 mx-auto w-full max-w-screen-lg flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "font-bold font-permanent-marker text-2xl",
            pathname === "/" && "text-primary-foreground"
          )}
        >
          {pathname === "/" ? "Kenta Kudo" : "K"}
        </Link>
        <nav className="font-bold text-slate-500">
          <ul className="flex gap-4">
            <li className="hover:text-foreground">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-foreground">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-foreground">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
