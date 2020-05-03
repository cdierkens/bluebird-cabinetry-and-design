import { throttle } from "lodash";
import { useCallback, useEffect, useState } from "react";

const isClient = typeof window === "object";

const getSize = () =>
  isClient
    ? {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    : null;

export default function useWindowSize({ wait = 200 } = {}) {
  const [windowSize, setWindowSize] = useState(getSize());

  const handleResize = useCallback(
    throttle(() => {
      setWindowSize(getSize());
    }, wait),
    []
  );

  useEffect(() => {
    if (!isClient) {
      return;
    }

    window.addEventListener("resize", handleResize, { passive: true });

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return windowSize;
}
