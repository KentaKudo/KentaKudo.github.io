import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import * as ddiaChapter10 from "./blog._entries.ddia-chapter-10.mdx";
import * as rayTracerOnWeb from "./blog._entries.ray-tracer-on-web.mdx";

export async function loader() {
  return json([
    {
      slug: ddiaChapter10.filename
        .replace(/^blog\./, "")
        .replace(/^_entries\./, "")
        .replace(/\.mdx?$/, ""),
      ...ddiaChapter10.attributes.meta.reduce(
        (acc: Record<string, any>, cur: Record<string, any>) => ({
          ...acc,
          ...cur,
        }),
        {}
      ),
    },
    {
      slug: rayTracerOnWeb.filename
        .replace(/^blog\./, "")
        .replace(/^_entries\./, "")
        .replace(/\.mdx?$/, ""),
      ...rayTracerOnWeb.attributes.meta.reduce(
        (acc: Record<string, any>, cur: Record<string, any>) => ({
          ...acc,
          ...cur,
        }),
        {}
      ),
    },
  ]);
}

export default function Index() {
  const posts = useLoaderData<typeof loader>();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={post.slug}>{post.title}</Link>
          {post.description ? <p>{post.description}</p> : null}
        </li>
      ))}
    </ul>
  );
}
