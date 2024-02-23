import Hello, { frontmatter as helloFrontmatter } from "./hello.mdx";
import DDIA10, {
  frontmatter as ddia10FrontMatter,
} from "./ddia-chapter-10.mdx";

export const mapping = {
  hello: [Hello, helloFrontmatter],
  "ddia-chapter-10": [DDIA10, ddia10FrontMatter],
} as const;

export type Key = keyof typeof mapping;
