declare module "*.mdx" {
  interface Frontmatter {
    title: string;
    description: string;
  }
  export const frontmatter: Frontmatter;
}
