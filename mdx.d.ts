declare module "*.mdx" {
  import type { MDXProps } from "mdx/types";
  import type { Toc } from "@stefanprobst/rehype-extract-toc";

  export const tableOfContents: Toc;
  export default function MDXContent(props: MDXProps): JSX.Element;

  interface Frontmatter {
    title: string;
    description: string;
    published: string;
    image?: {
      src: string;
      alt: string;
      credit: string;
    };
  }
  export const frontmatter: Frontmatter;
}
