"use client";
import { useMemo } from "react";
import useActiveMediaQuery from "./useActiveMediaQuery";
import { Button } from "../Button";

const queries = [
  { id: "1", mediaQuery: "(max-width: 568px)", props: { size: "sm" } },
  { id: "2", mediaQuery: "(max-width: 768px)", props: { size: "2xl" } },
];

export function ResponsiveButton() {
  const activeMediaQueryId = useActiveMediaQuery(queries as any);

  const activeMediaQuery = useMemo(() => {
    return queries.find((q) => q.id === activeMediaQueryId);
  }, [activeMediaQueryId]);

  return (
    <Button size="lg" {...(activeMediaQuery?.props ?? ({} as any))}>
      Responsive Button
    </Button>
  );
}
