import { Link, Outlet } from "@remix-run/react";
import { Breadcrumbs } from "~/components/Breadcrumbs";

const Layout = () => {
  return (
    <main className="w-full max-w-screen-sm mx-auto py-10 px-6 sm:py-20 sm:px-0">
      <Breadcrumbs />
      <Outlet />
      <hr />
      <Link to={`/blog`}>back</Link>
    </main>
  );
};

export default Layout;
