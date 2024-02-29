import type { FC } from "react";
import { cn } from "@/lib/utils";

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

  return (
    <time className={cn("italic text-slate-400", className)}>{formatted}</time>
  );
};
