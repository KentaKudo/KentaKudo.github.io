import { Link, useLoaderData } from "@remix-run/react";
import { PublishedAt } from "~/components/PublishedAt";
import { Thumbnail } from "~/components/Thumbnail";
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
      {posts.map(({ slug, frontmatter }) => (
        <li key={slug}>
          <Link
            to={`/blog/${slug}`}
            className="p-2 grid grid-cols-[2fr_1fr] rounded-md hover:underline"
          >
            <div>
              <h2 className="font-bold text-xl">{frontmatter.title}</h2>
              <PublishedAt
                at={frontmatter.published}
                className="italic text-sm text-slate-400"
              />
              {frontmatter.description ? (
                <p className="mt-2 line-clamp-3">{frontmatter.description}</p>
              ) : null}
            </div>
            {frontmatter.image && <Thumbnail {...frontmatter.image} />}
          </Link>
        </li>
      ))}
    </ul>
  );
}
