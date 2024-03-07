import type { FC } from "react";
import { cn, tailwindFullConfig } from "@/lib/utils";
import Image from "next/image";

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
    <figure className={cn("flex flex-col gap-1 items-center", className)}>
      <Image
        src={src}
        alt={alt}
        className="rounded-lg overflow-hidden shadow-md"
        width={736}
        height={490}
      />
      <figcaption
        dangerouslySetInnerHTML={{ __html: caption }}
        className="text-slate-400 text-sm [&>a]:italic [&>a]:underline"
      />
    </figure>
  );
};
