declare module "*.mdx" {
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
