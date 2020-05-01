import { throttle } from "lodash";
import { useCallback, useEffect, useState } from "react";

const isClient = typeof window === "object";

export default function useScrollPosition({
  wait = 200,
  element = isClient ? window : null,
} = {}) {
  const getPosition = () => ({
    x: element ? element.pageXOffset : null,
    y: element ? element.pageYOffset : null,
  });

  let [position, setPosition] = useState(getPosition());

  const callback = useCallback(
    throttle(() => {
      setPosition(getPosition());
    }, wait),
    [element]
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
