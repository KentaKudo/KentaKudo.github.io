import type { FC } from "react";

type Props = {
  at: string;
};

export const PublishedAt: FC<Props> = ({ at }) => {
  const formatted = new Date(at).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <time>{formatted}</time>;
};
