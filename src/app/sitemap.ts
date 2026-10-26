import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/stylists",
    "/gallery",
    "/about",
    "/booking",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/booking" ? 0.9 : 0.7,
  }));
}
