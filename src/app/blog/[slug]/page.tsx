import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import "highlight.js/styles/a11y-dark.css";

import { PublishedAt } from "@/components/PublishedAt";

import "./blog.css";
import { EyeCatch } from "./EyeCatch";

import { Metadata } from "next";
import { CONTENTS, Content } from "@/contents";
import { ShareButton } from "@/components/ShareButton";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const content = CONTENTS[slug as Content];
  if (!content) return {};

  const [_, frontmatter] = content;
  return { title: frontmatter.title, description: frontmatter.description };
}

export async function generateStaticParams() {
  return Object.keys(CONTENTS).map((slug) => ({ slug }));
}

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const content = CONTENTS[slug as Content];
  if (!content) notFound();

  const [Content, frontmatter] = content;

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
      <div className="flex items-center justify-between mt-8">
        <h1 className="font-bold text-4xl">{frontmatter.title}</h1>
        <ShareButton url={`/blog/${slug}`} title={frontmatter.title} />
      </div>
      <PublishedAt at={frontmatter.published} className="block mt-2 mb-8" />

      <main
        className={cn(
          "flex flex-col gap-4 pt-20 pb-24",
          "[&_h2]:text-2xl [&_h3]:text-xl [&_h4]:text-lg [&_:is(h2,h3,h4,h5,h6)]:font-bold [&_:is(h2,h3,h4,h5,h6)]:leading-relaxed [&_:is(h2,h3,h4,h5,h6)]:mt-8",
          "[&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-slate-300",
          "[&_aside]:text-accent-foreground [&_aside]:bg-accent [&_aside]:rounded-md [&_aside]:p-5",
          "[&_ul]:pl-4 [&_ul]:list-disc [&_ul]:list-outside [&_ul_ul]:pl-8"
        )}
      >
        <Content />
      </main>
    </>
  );
}
