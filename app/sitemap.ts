import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://viveksonawale.github.io/",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        // Add other routes here if you have them, e.g., /blog
        // {
        //   url: "https://viveksonawale.github.io/blog",
        //   lastModified: new Date(),
        //   changeFrequency: "weekly",
        //   priority: 0.8,
        // },
    ];
}
