import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({ remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter] }),
    },
    remix({ ssr: false }),
    tsconfigPaths(),
  ],
});
