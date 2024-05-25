"use client";
import { useMemo } from "react";
import { Button } from "../Button";
import useActiveMediaQuery from "./useActiveMediaQuery";

const queries = [
  { id: "1", mediaQuery: "(max-width: 568px)", props: { size: "sm" } },
  { id: "2", mediaQuery: "(max-width: 768px)", props: { size: "2xl" } },
];

export function ResponsiveButton() {
  const activeMediaQuery = useActiveMediaQuery(queries.map((q) => q.mediaQuery) as any);

  const active = useMemo(() => {
    return queries.find((q) => q.mediaQuery === activeMediaQuery);
  }, [activeMediaQuery]);

  return (
    <Button size="lg" {...(active?.props ?? ({} as any))}>
      Responsive Button
    </Button>
  );
}
