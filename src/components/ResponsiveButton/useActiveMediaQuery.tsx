"use client";
import { useEffect, useState } from "react";

export default function useActiveMediaQuery(queries: [{ id: string; mediaQuery: string }]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleMediaQueryChange = (e: MediaQueryListEvent, query: (typeof queries)[0]) => {
      if (e.matches) {
        setActiveId(query.id);
      } else {
        const mediaList = queries.map((q) => ({
          media: window.matchMedia(q.mediaQuery),
          id: q.id,
        }));
        const media = mediaList.find((m) => m.media.matches);
        setActiveId(media?.id ?? null);
      }
    };

    const matchMediaList = queries.map((query) => {
      const media = window.matchMedia(query.mediaQuery);
      if (media.matches) setActiveId(query.id);
      return { media, ...query };
    });

    matchMediaList.forEach((meta) => {
      meta.media.addEventListener("change", (q) => handleMediaQueryChange(q, meta));
    });

    return () => {
      matchMediaList.forEach((meta) => {
        meta.media.removeEventListener("change", (q) => handleMediaQueryChange(q, meta));
      });
    };
  }, [queries]);

  return activeId;
}
