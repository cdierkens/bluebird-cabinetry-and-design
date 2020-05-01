import { throttle } from "lodash";
import { useCallback, useEffect, useState } from "react";
const isClient = typeof window === "object";

export default function useScrollPosition({
  wait = 200,
  element = window,
} = {}) {
  const getPosition = () => ({
    x: isClient ? element.pageXOffset : null,
    y: isClient ? element.pageYOffset : null,
  });

  let [position, setPosition] = useState(getPosition());

  const callback = useCallback(
    throttle(() => {
      setPosition(getPosition());
    }, wait),
    [element]
  );

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    element.addEventListener("scroll", callback, { passive: true });

    return () => {
      callback.cancel();
      element.removeEventListener("scroll", callback);
    };
  }, [callback, element]);

  return position;
}
