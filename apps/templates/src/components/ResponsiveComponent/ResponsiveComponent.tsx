"use client";
import React, { useMemo } from "react";
import useActiveMediaQuery from "./useActiveMediaQuery";

type Query<TItem> = {
  mediaQuery: string;
  props: TItem;
};

type Props<TItem> = {
  component: React.ReactElement;
  queries: Query<TItem>[];
};

export function ResponsiveComponent<TItem>({ component, queries }: Props<TItem>) {
  const activeMediaQuery = useActiveMediaQuery(queries.map((q) => q.mediaQuery) as any);

  const active = useMemo(() => {
    return queries.find((q) => q.mediaQuery === activeMediaQuery);
  }, [activeMediaQuery, queries]);

  const mergedProps = {
    ...component.props,
    ...(active?.props ?? {}),
  };

  const clonedComponent = React.cloneElement(component, mergedProps);

  return clonedComponent;
}
