import Hello, { frontmatter as helloFrontmatter } from "./hello.mdx";
import DDIA10, {
  frontmatter as ddia10Frontmatter,
} from "./ddia-chapter-10.mdx";
import RayTracer, {
  frontmatter as rayTracerFrontmatter,
} from "./ray-tracer-on-web.mdx";

export const mapping = {
  hello: [Hello, helloFrontmatter],
  "ddia-chapter-10": [DDIA10, ddia10Frontmatter],
  "ray-tracer-on-web": [RayTracer, rayTracerFrontmatter],
} as const;

export type Key = keyof typeof mapping;
