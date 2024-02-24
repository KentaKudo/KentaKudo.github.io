import { Link } from "@remix-run/react";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="sticky top-0 px-4 backdrop-blur-sm">
      <div className="h-20 mx-auto w-full max-w-screen-lg flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          Kenta Kudo
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
