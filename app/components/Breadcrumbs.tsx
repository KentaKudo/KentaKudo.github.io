import { Link, useLocation } from "@remix-run/react";
import type { FC } from "react";

export const Breadcrumbs: FC = () => {
  const { pathname } = useLocation();
  const paths = pathname
    .replace(/\/$/, "") // remove trailing '/'
    .split("/")
    .reduce((acc: string[], cur) => {
      const lastElem = acc[acc.length - 1] ?? "";
      return [...acc, lastElem + (lastElem.endsWith("/") ? "" : "/") + cur];
    }, []);

  return (
    <ol
      style={{
        padding: 0,
        listStyleType: "none",
        display: "flex",
        gap: "1rem",
      }}
    >
      {paths.map((p) => {
        const elem = p.split("/").pop();

        return (
          <li key={p}>
            {p === pathname ? (
              <p>{elem !== "" ? elem : "home"}</p>
            ) : (
              <Link to={p}>{elem !== "" ? elem : "home"}</Link>
            )}
          </li>
        );
      })}
    </ol>
  );
};
