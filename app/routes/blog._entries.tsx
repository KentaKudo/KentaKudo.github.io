import { Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import styles from "~/styles/blog.css";
import highlightStylesHref from "highlight.js/styles/a11y-dark.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: highlightStylesHref },
];

// const ENTRY_MAPPING = {
//   "ddia-chapter-10": ddiaChapter10,
// };

const Layout = () => {
  //   const { pathname } = useLocation();
  //   const slug = pathname.split("/").pop();
  //   console.log(`slug: ${slug}`);

  //   const title = ENTRY_MAPPING[slug ?? ""].meta
  //     .filter((r) => "title" in r)
  //     .pop().title;

  return (
    <main>
      {/* <h1>{title}</h1> */}
      <Outlet />
    </main>
  );
};

export default Layout;
