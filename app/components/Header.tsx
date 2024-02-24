import { Link } from "@remix-run/react";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <header>
      <div className="h-20 mx-auto w-full max-w-screen-lg flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          Kenta Kudo
        </Link>
        <nav>
          <ul className="flex gap-4 font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
