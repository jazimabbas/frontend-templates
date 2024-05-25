"use client";
import { useEffect, useState } from "react";

export type MediaQuery = string;

export default function useActiveMediaQuery(queries: MediaQuery[]) {
  const [activeMediaQuery, setActiveMediaQuery] = useState<string | null>(null);

  useEffect(() => {
    const handleMediaQueryChange = (e: MediaQueryListEvent, query: MediaQuery) => {
      if (e.matches) {
        setActiveMediaQuery(query);
      } else {
        const mediaList = queries.map((q) => ({
          media: window.matchMedia(q),
          mediaQuery: q,
        }));
        const media = mediaList.find((m) => m.media.matches);
        setActiveMediaQuery(media?.mediaQuery ?? null);
      }
    };

    const matchMediaList = queries.map((query) => {
      const media = window.matchMedia(query);
      if (media.matches) setActiveMediaQuery(query);
      return { media, mediaQuery: query };
    });

    matchMediaList.forEach((meta) => {
      meta.media.addEventListener("change", (q) => handleMediaQueryChange(q, meta.mediaQuery));
    });

    return () => {
      matchMediaList.forEach((meta) => {
        meta.media.removeEventListener("change", (q) => handleMediaQueryChange(q, meta.mediaQuery));
      });
    };
  }, [queries]);

  return activeMediaQuery;
}
