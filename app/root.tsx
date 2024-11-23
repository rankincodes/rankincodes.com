import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
} from "@remix-run/react";

import stylesheet from "./tailwind.css?url";
import React from "react";
import ThemeToggle from "./components/theme-toggle";
import TopBar from "./components/topbar"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export async function loader() {
  return {
    themeScript: `
     document.documentElement.classList.toggle(
       'dark',
        localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      )
    `
  }
}

export function Layout({ 
  children 
}: { 
    children: React.ReactNode 
}) {
  const { themeScript } = useLoaderData<typeof loader>()
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-white dark:bg-black dark:text-white">
        <TopBar />
        {children}
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />  
}



