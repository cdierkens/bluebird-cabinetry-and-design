import { useCallback, useEffect, useState } from "react";

export default function useMatchMedia(query: string) {
  const [matches, setMatches] = useState(false);

  const callback = useCallback(
    (event: MediaQueryListEvent) => setMatches(event.matches),
    []
  );

  useEffect(() => {
    if (typeof window !== "object") {
      return;
    }

    const mediaQueryList = window.matchMedia(query);

    setMatches(mediaQueryList.matches);

    mediaQueryList.addListener(callback);

    return () => {
      mediaQueryList.removeListener(callback);
    };
  }, [query, callback]);

  return matches;
}
