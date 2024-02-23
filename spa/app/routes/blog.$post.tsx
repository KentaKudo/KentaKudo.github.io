import PostMDX, { frontmatter } from "./post.mdx";

export default function Post() {
  return (
    <>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <main>
        <PostMDX />
      </main>
    </>
  );
}
