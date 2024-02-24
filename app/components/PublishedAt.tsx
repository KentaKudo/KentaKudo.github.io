import type { FC } from "react";

type Props = {
  at: string;
  className?: string;
};

export const PublishedAt: FC<Props> = ({ at, className }) => {
  const formatted = new Date(at).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <time className={className}>{formatted}</time>;
};
