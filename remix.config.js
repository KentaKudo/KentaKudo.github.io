/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",

  // MDX plugins
  mdx: async (filename) => {
    const [rehypeHighlight, remarkToc] = await Promise.all([
      import("rehype-highlight").then((mod) => mod.default),
      import("remark-toc").then((mod) => mod.default),
    ]);

    return {
      rehypePlugins: [rehypeHighlight],
      remarkPlugins: [remarkToc],
    };
  },
};
