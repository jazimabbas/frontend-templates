"use client";
import { useEffect, useRef, useState } from "react";

export default function useIsFrameLoaded() {
  const iframeRef = useRef<HTMLIFrameElement>();
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    const iframeCurrent = iframeRef.current;

    if (iframeCurrent?.contentDocument?.readyState === "complete") {
      setIsIframeLoaded(true);
      return;
    }

    iframeCurrent?.addEventListener("load", () => setIsIframeLoaded(true));

    return () => {
      iframeCurrent?.removeEventListener("load", () => setIsIframeLoaded(true));
    };
  }, []);

  return { iframeRef, isIframeLoaded };
}
