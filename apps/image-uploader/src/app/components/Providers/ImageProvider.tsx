"use client";
import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { Action, initialState, reducer, State } from "./reducer";

const ImageContext = createContext<State>({} as any);
const UpdateImageContext = createContext<Dispatch<Action>>({} as any);

export function ImageProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UpdateImageContext.Provider value={dispatch}>
      <ImageContext.Provider value={state}>{children}</ImageContext.Provider>
    </UpdateImageContext.Provider>
  );
}

export const useImageUpload = () => useContext(ImageContext);
export const useImageUploadUpdate = () => useContext(UpdateImageContext);
