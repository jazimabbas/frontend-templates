import { WritableAtom } from "jotai";

export type Optional<T> = T | null | undefined;

export type ExtractAtom<T> = T extends WritableAtom<infer U, any, any> ? U : never;
