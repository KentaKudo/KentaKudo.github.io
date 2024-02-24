import type { FC } from "react";
import { cn } from "~/lib/utils";

type Props = {
  src: string;
  alt: string;
  children: TrustedHTML;
  className?: string;
};

export const EyeCatch: FC<Props> = ({
  src,
  alt,
  children: caption,
  className,
}) => {
  return (
    <figure className={cn("flex flex-col items-center", className)}>
      <img src={src} alt={alt} />
      <figcaption
        dangerouslySetInnerHTML={{ __html: caption }}
        className="text-slate-400 text-sm [&>a]:italic [&>a]:underline"
      />
    </figure>
  );
};
