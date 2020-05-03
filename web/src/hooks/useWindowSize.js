import { delay, throttle } from "lodash";
import { useCallback, useEffect, useState } from "react";

const hasWindow = typeof window === "object";

const getSize = () =>
  hasWindow
    ? {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    : null;

export default function useWindowSize({ wait = 200 } = {}) {
  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    if (!hasWindow) {
      return;
    }

    const mediaQuery = window.matchMedia("(orientation: portrait)");

    const orientationHandler = () => {
      delay(() => setWindowSize(getSize()), 500);
    };

    mediaQuery.addListener(orientationHandler);

    return () => {
      mediaQuery.removeListener(orientationHandler);
    };
  }, []);

  const handleResize = useCallback(() => setWindowSize(getSize()), []);

  useEffect(() => {
    if (!hasWindow) {
      return;
    }

    const callback = throttle(handleResize, wait);

    window.addEventListener("resize", callback, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", callback);
    };
  }, [handleResize, wait]);

  return windowSize;
}
