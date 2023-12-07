import type { FC, ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  children: ReactNode;
};

export const EyeCatch: FC<Props> = ({ src, alt, children: caption }) => {
  return (
    <figure>
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};
