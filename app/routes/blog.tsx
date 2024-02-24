import { Outlet } from "@remix-run/react";

const Layout = () => {
  return (
    <main className="w-full max-w-screen-md mx-auto py-4 px-4">
      <Outlet />
    </main>
  );
};

export default Layout;
