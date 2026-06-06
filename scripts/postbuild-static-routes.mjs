import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";

const distDir = new URL("../dist", import.meta.url).pathname;
const rootIndex = join(distDir, "index.html");
const sitemapPath = join(distDir, "sitemap.xml");

if (!existsSync(rootIndex)) {
  throw new Error("dist/index.html is missing. Run vite build first.");
}

if (!existsSync(sitemapPath)) {
  throw new Error("dist/sitemap.xml is missing. Keep sitemap generation before route shell generation.");
}

const sitemap = readFileSync(sitemapPath, "utf8");
const routes = [...sitemap.matchAll(/<loc>https:\/\/www\.aureussigmacapital\.com\/(.*?)<\/loc>/g)]
  .map((match) => `/${match[1]}`.replace(/\/+/g, "/"))
  .map((route) => route.replace(/\/$/, "") || "/")
  .filter((route, index, all) => all.indexOf(route) === index);

for (const route of routes) {
  if (route === "/") continue;
  const target = join(distDir, route.slice(1), "index.html");
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(rootIndex, target);
}

console.log(`Generated ${Math.max(routes.length - 1, 0)} static route shells.`);
console.log(routes.join("\n"));
