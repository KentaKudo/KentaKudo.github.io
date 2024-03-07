"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import "highlight.js/styles/a11y-dark.css";

import { PublishedAt } from "@/components/PublishedAt";

import "./blog.css";
import { CONTENTS } from ".";
import { EyeCatch } from "./EyeCatch";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const { frontmatter } = CONTENTS.find(
    ({ slug }) => slug === pathname.split("/").pop()
  )!;

  return (
    <>
      {frontmatter.image && (
        <EyeCatch
          src={`/images/${frontmatter.image.src}`}
          alt={frontmatter.image.alt}
        >
          {frontmatter.image.credit}
        </EyeCatch>
      )}
      <h1 className="mt-8 font-bold text-4xl">{frontmatter.title}</h1>
      <PublishedAt at={frontmatter.published} className="block mt-2 mb-8" />

      <main
        className={cn(
          "flex flex-col gap-4",
          "[&_h2]:text-2xl [&_h3]:text-xl [&_h4]:text-lg [&_:is(h2,h3,h4,h5,h6)]:font-bold",
          "[&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-slate-300",
          "[&_aside]:text-accent-foreground [&_aside]:bg-accent [&_aside]:rounded-md [&_aside]:p-5",
          "[&_ul]:pl-4 [&_ul]:list-disc [&_ul]:list-outside [&_ul_ul]:pl-8"
        )}
      >
        {children}
      </main>
    </>
  );
}
