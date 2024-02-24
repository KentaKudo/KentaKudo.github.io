import { Link, useLoaderData } from "@remix-run/react";
import { mapping } from "~/contents";

export const clientLoader = () => {
  return Object.entries(mapping).map(([slug, [, frontmatter]]) => ({
    slug,
    frontmatter,
  }));
};

export default function Index() {
  const posts = useLoaderData<typeof clientLoader>();

  return (
    <ul>
      {posts.map(({ slug, frontmatter }) => (
        <li key={slug}>
          <Link to={`/blog/${slug}`}>{frontmatter.title}</Link>
          {frontmatter.description ? <p>{frontmatter.description}</p> : null}
        </li>
      ))}
    </ul>
  );
}
