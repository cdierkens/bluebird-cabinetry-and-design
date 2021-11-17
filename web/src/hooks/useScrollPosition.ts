import { throttle } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";

const isClient = typeof window === "object";

export default function useScrollPosition({
  wait = 200,
  element = isClient ? window : null,
} = {}) {
  const getPosition = useCallback(
    () => ({
      x: element ? element.pageXOffset : null,
      y: element ? element.pageYOffset : null,
    }),
    [element]
  );

  const [position, setPosition] = useState(getPosition());

  const callback = useMemo(
    () =>
      throttle(() => {
        setPosition(getPosition());
      }, wait),
    [wait, getPosition, setPosition]
  );

  useEffect(() => {
    if (!element) {
      return;
    }

    element.addEventListener("scroll", callback, { passive: true });

    return () => {
      callback.cancel();
      element.removeEventListener("scroll", callback);
    };
  }, [callback, element]);

  return position;
}
