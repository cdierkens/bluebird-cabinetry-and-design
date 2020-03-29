import { useCallback, useEffect } from "react";

export default function useMatchMedia(query, handler) {
  const callback = useCallback(handler, [query]);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    if (mediaQueryList.matches) {
      callback.call(null, new MediaQueryListEvent("", mediaQueryList));
    }

    mediaQueryList.addListener(callback);

    return () => {
      mediaQueryList.removeListener(callback);
    };
  }, [query, callback]);
}
