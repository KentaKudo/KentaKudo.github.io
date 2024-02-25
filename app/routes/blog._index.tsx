import { Link, useLoaderData } from "@remix-run/react";
import { PublishedAt } from "~/components/PublishedAt";
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
    <ul className="flex flex-col gap-2">
      {posts
        .sort((a, b) =>
          new Date(a.frontmatter.published) < new Date(b.frontmatter.published)
            ? 1
            : -1
        )
        .map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link
              to={`/blog/${slug}`}
              className="p-2 rounded-md hover:underline"
            >
              <h2 className="font-bold text-xl">{frontmatter.title}</h2>
              <PublishedAt at={frontmatter.published} className="text-sm" />
              {frontmatter.description ? (
                <p className="mt-2 line-clamp-3">{frontmatter.description}</p>
              ) : null}
            </Link>
          </li>
        ))}
    </ul>
  );
}
