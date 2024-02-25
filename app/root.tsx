import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStylesHref from "./globals.css?url";
import { Header } from "./components/Header";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { Footer } from "./components/Footer";
import { GTag } from "./GTag";

export const meta: MetaFunction = () => {
  return [
    { title: "Kenta Kudo" },
    { name: "description", content: "Welcome my page!" },
    { property: "og:title", content: "Kenta Kudo" },
    { property: "og:description", content: "Welcome my page!" },
    {
      property: "og:image",
      content: "https://kentakudo.com/images/river-themes.jpg",
    },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:creator", content: "@___________k_k_" },
  ];
};

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: globalStylesHref },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:wght@400;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <GTag />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return (
    <div className="-z-10 absolute top-0 right-0 bottom-0 left-0 h-screen w-full flex items-center justify-center bg-slate-500">
      <LoadingSpinner className="text-primary-foreground" />
    </div>
  );
}
