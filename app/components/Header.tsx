import { Link, useLocation } from "@remix-run/react";
import { FC } from "react";
import { cn } from "~/lib/utils";

export const Header: FC = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 px-4 backdrop-blur-sm">
      <div className="h-20 mx-auto w-full max-w-screen-lg flex items-center justify-between">
        <Link
          to="/"
          className={cn(
            "font-bold font-permanent-marker text-2xl",
            location.pathname === "/" && "text-primary-foreground"
          )}
        >
          {location.pathname === "/" ? "Kenta Kudo" : "K"}
        </Link>
        <nav className="font-bold text-slate-500">
          <ul className="flex gap-4">
            <li className="hover:text-foreground">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-foreground">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-foreground">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
