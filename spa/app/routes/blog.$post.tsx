import { LinksFunction, MetaFunction } from "@remix-run/node";
import { ClientLoaderFunctionArgs, useLoaderData } from "@remix-run/react";
import highlightStylesHref from "highlight.js/styles/a11y-dark.css?url";
import { EyeCatch } from "~/components/EyeCatch";
import { PublishedAt } from "~/components/PublishedAt";

import { Key, mapping } from "~/contents";
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
      <h1>{frontmatter.title}</h1>
      <PublishedAt at={frontmatter.published} />
      {frontmatter.image && (
        <EyeCatch
          src={`/images/${frontmatter.image.src}`}
          alt={frontmatter.image.alt}
        >
          {frontmatter.image.credit}
        </EyeCatch>
      )}
      <main>
        <Component />
      </main>
    </>
  );
}
