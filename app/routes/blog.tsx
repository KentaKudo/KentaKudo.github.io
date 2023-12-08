import { Link, Outlet } from "@remix-run/react";
import { Breadcrumbs } from "~/components/Breadcrumbs";

const Layout = () => {
  return (
    <main
      style={{
        width: "100%",
        maxWidth: "720px",
        margin: "auto",
        padding: "5rem 1.5rem",
      }}
    >
      <Breadcrumbs />
      <Outlet />
      <hr />
      <Link to={`/blog`}>back</Link>
    </main>
  );
};

export default Layout;
