import Link from "next/link";
import { frontmatter } from "./(contents)/hello/page.mdx";
import { PublishedAt } from "./PublishedAt";

const contents = [{ slug: "hello", frontmatter }];

export default function Blog() {
  return (
    <ul className="flex flex-col gap-2">
      {contents
        .sort((a, b) =>
          new Date(a.frontmatter.published) < new Date(b.frontmatter.published)
            ? 1
            : -1
        )
        .map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link
              href={`/blog/${slug}`}
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
