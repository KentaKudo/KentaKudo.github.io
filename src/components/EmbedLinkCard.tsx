import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import ogs from "open-graph-scraper";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

type Props = {
  url: string;
};

export const EmbedLinkCard: FC<Props> = async ({ url }) => {
  const data = await ogs({ url });
  if (data.error || !data.result.success) return null;

  const {
    ogTitle: title,
    ogDescription: description,
    ogImage: images,
    favicon,
  } = data.result;
  const image = images?.pop();

  const faviconSrc =
    favicon && favicon.startsWith("http")
      ? favicon
      : `${new URL(url).origin}${favicon}`;

  return (
    <Link href={url} target="_blank" className="!no-underline">
      <Card className="flex justify-between items-center overflow-hidden hover:bg-muted duration-200">
        <div className="min-w-0 px-6 flex flex-col gap-3">
          <CardHeader className="p-0">
            <CardTitle className="!m-0 !text-base line-clamp-2">
              {title}
            </CardTitle>
            <CardDescription className="!m-0 line-clamp-1">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex gap-2 items-center">
              {faviconSrc && (
                <Image src={faviconSrc} alt="favicon" width={16} height={16} />
              )}
              <p className="text-sm text-muted-foreground">
                {new URL(url).hostname}
              </p>
            </div>
          </CardContent>
        </div>
        {image ? (
          <Image
            className="flex-none w-[120px] md:w-[230px] h-[120px] object-center object-cover"
            src={image.url}
            alt={image.alt ?? "page image"}
            width={230}
            height={120}
          />
        ) : (
          <Skeleton className="flex-none w-[120px] md:w-[230px] h-[120px] " />
        )}
      </Card>
    </Link>
  );
};
