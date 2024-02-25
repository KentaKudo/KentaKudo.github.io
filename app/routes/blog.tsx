import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Kenta Kudo | Blog" },
    // { name: "description", content: "Welcome my page!" },
  ];
};

const Layout = () => {
  return (
    <main className="w-full max-w-screen-md mx-auto py-4 px-4">
      <Outlet />
    </main>
  );
};

export default Layout;
