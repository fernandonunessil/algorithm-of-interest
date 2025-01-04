import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="w-full bg-lime-800 flex items-center justify-between px-8 py-4">
          <h2 className="text-2xl text-white font-semibold">
            algorithm-of-interest
          </h2>

          <div>
            <ul className="flex items-center justify-center gap-8 text-white">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/tags"}>Tags</Link>
              </li>
              <li>
                <Link to={"/interests"}>Interests</Link>
              </li>
            </ul>
          </div>
        </header>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
