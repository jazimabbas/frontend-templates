"use client";
import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { Action, reducer, State } from "./reducer";

const ImageContext = createContext<State[]>([]);
const UpdateImageContext = createContext<Dispatch<Action>>({} as any);

export function ImageProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <UpdateImageContext.Provider value={dispatch}>
      <ImageContext.Provider value={state}>{children}</ImageContext.Provider>
    </UpdateImageContext.Provider>
  );
}

export const useImageUpload = () => useContext(ImageContext);
export const useImageUploadUpdate = () => useContext(UpdateImageContext);
