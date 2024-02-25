import type { FC } from "react";

type Props = {
  src: string;
  alt: string;
  caption?: string;
};

export const ArticleInlineImage: FC<Props> = ({ src, alt, caption }) => {
  return (
    <figure>
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};
