import type { FC } from "react";

type Props = {
  src: string;
  alt: string;
};

export const Thumbnail: FC<Props> = ({ src, alt }) => {
  return (
    <figure className="rounded-md overflow-hidden">
      <img
        src={`/images/${src}`}
        alt={alt}
        className="aspect-video object-center object-cover"
      />
    </figure>
  );
};
