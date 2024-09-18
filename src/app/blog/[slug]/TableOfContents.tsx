"use client";

import { cn } from "@/lib/utils";
import { TocEntry } from "@stefanprobst/rehype-extract-toc";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

type Props = {
  toc: TocEntry[];
  className?: string;
};

const getClosestHeadingId = () => {
  const middleOfTheViewport = window.scrollY + window.innerHeight * 0.2;
  const headings = document.querySelectorAll(":is(h2, h3)");

  let closest: Element | null = null;
  let minDistance = Infinity;

  headings.forEach((h) => {
    if (!h.id) return;
    const headingTop = h.getBoundingClientRect().top + window.scrollY;
    const distance = Math.abs(headingTop - middleOfTheViewport);
    if (distance < minDistance) {
      minDistance = distance;
      closest = h;
    }
  });

  // @ts-ignore
  return closest ? closest.id : null;
};

export const TableOfContents: FC<Props> = ({ toc, className }) => {
  const [closestHeadingId, setClosestHeadingId] = useState<string | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setClosestHeadingId(getClosestHeadingId());
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setClosestHeadingId(getClosestHeadingId());
      });
    };
  }, []);

  return (
    <aside
      className={cn(
        "w-60 sticky top-24 hidden md:flex flex-col gap-4",
        className
      )}
    >
      <h3 className="uppercase">Table of contents</h3>
      <ol className="text-sm text-muted-foreground flex flex-col gap-3">
        {toc?.map((t) => (
          <li key={t.id} className="flex flex-col gap-2">
            <Link
              href={t.id ? `#${t.id}` : ""}
              className={cn(
                "hover:text-foreground",
                closestHeadingId === t.id && "text-foreground"
              )}
            >
              {t.value}
            </Link>
            <ol className="ps-4 flex flex-col gap-1">
              {t.children?.map((t) => (
                <li key={t.id}>
                  <Link
                    href={t.id ? `#${t.id}` : ""}
                    className={cn(
                      "hover:text-foreground",
                      closestHeadingId === t.id && "text-foreground"
                    )}
                  >
                    {t.value}
                  </Link>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </aside>
  );
};
