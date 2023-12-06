import { Link, Outlet, useLocation } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import styles from "~/styles/blog.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

const Layout = () => {
  const { pathname } = useLocation();
  if (pathname.match(/^\/blog\/$/)) {
    console.log(`it is /blog here`);
  }

  const elems = pathname.split("/").filter((e) => !!e);
  console.log(`elems: ${elems}`);
  if (elems.length === 2) {
    const slug = elems[1];
    console.log(`slug: ${slug}`);
  }

  return (
    <main
      style={{
        width: "100%",
        maxWidth: "720px",
        margin: "auto",
        padding: "5rem 1.5rem",
      }}
    >
      <Outlet />
      <hr />
      <Link to={`/blog`}>back</Link>
    </main>
  );
};

export default Layout;
