import { LinksFunction, MetaFunction } from "@remix-run/node";
import { ClientLoaderFunctionArgs, useLoaderData } from "@remix-run/react";
import highlightStylesHref from "highlight.js/styles/a11y-dark.css?url";

import { EyeCatch } from "~/components/EyeCatch";
import { PublishedAt } from "~/components/PublishedAt";
import { Key, mapping } from "~/contents";
import { cn } from "~/lib/utils";
import styles from "~/styles/blog.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: highlightStylesHref },
];

export const clientLoader = async ({
  params: { post },
}: ClientLoaderFunctionArgs) => {
  if (!post || !(post in mapping)) throw new Error();
  const [Component, frontmatter] = mapping[post as Key];
  return { Component, frontmatter } as const;
};

export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
  return [
    {
      title: data.frontmatter.title,
    },
    {
      name: "description",
      content: data.frontmatter.description,
    },
  ];
};

export default function Post() {
  const { Component, frontmatter } = useLoaderData<typeof clientLoader>();

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
          "[&_aside]:text-accent-foreground [&_aside]:bg-accent [&_aside]:rounded-md [&_aside]:p-5"
        )}
      >
        <Component />
      </main>
    </>
  );
}
