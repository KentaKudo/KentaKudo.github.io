import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import "highlight.js/styles/a11y-dark.css";

import { PublishedAt } from "@/components/PublishedAt";

import "./blog.css";
import { EyeCatch } from "./EyeCatch";

import { Metadata } from "next";
import { CONTENTS, Content } from "@/contents";
import { ShareButton } from "@/components/ShareButton";
import Link from "next/link";
import { TableOfContents } from "./TableOfContents";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const content = CONTENTS[slug as Content];
  if (!content) return {};

  const [_, frontmatter] = content;
  const ogImage = frontmatter.image
    ? `https://kentakudo.com/images/${frontmatter.image.src}`
    : undefined;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: `${frontmatter.title} | Kenta Kudo`,
      description: frontmatter.description,
      type: "article",
      url: `https://kentakudo.com/blog/${slug}`,
      images: ogImage ? [ogImage] : [],
    },
  };
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

  const [Content, frontmatter, toc] = content;

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
      </div>
      <div className="flex items-center justify-between mt-2 gap-4">
        <PublishedAt at={frontmatter.published} className="block" />
        <ShareButton url={`/blog/${slug}`} title={frontmatter.title} />
      </div>

      <div className="mt-20 w-full flex items-start gap-10 flex-col md:flex-row-reverse">
        <TableOfContents toc={toc} className="shrink-0" />

        <main
          className={cn(
            "min-w-0 w-full",
            "flex flex-col gap-4 pb-24",
            "[&_h2]:text-2xl [&_h3]:text-xl [&_h4]:text-lg [&_:is(h2,h3,h4,h5,h6)]:font-bold [&_:is(h2,h3,h4,h5,h6)]:leading-relaxed [&_:is(h2,h3,h4,h5,h6)]:mt-8",
            "[&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-slate-300",
            "[&_aside]:text-accent-foreground [&_aside]:bg-accent [&_aside]:rounded-md [&_aside]:p-5",
            "[&_ul]:pl-4 [&_ul]:list-disc [&_ul]:list-outside [&_ul_ul]:pl-8",
            "[&_hr]:w-full [&_hr]:max-w-80 [&_hr]:my-10 [&_hr]:mx-auto"
          )}
        >
          <Content />
        </main>
      </div>
    </>
  );
}
