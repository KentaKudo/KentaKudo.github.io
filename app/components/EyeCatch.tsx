import type { FC } from "react";

type Props = {
  src: string;
  alt: string;
  children: TrustedHTML;
};

export const EyeCatch: FC<Props> = ({ src, alt, children: caption }) => {
  return (
    <figure>
      <img src={src} alt={alt} />
      <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
    </figure>
  );
};
