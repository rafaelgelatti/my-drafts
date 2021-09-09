import { useEffect, useRef, useDebugValue } from "react";

export function useThrottle(fn = () => 1, timeout = 3000) {
  const previousRef = useRef(null);
  const currentRef = useRef(fn);
  if (previousRef.current !== fn) {
    currentRef.current = fn;
  }

  useDebugValue(currentRef.current, (fn) => fn?.toString());

  useEffect(() => {
    const handle = setInterval(() => {
      if (currentRef.current) {
        currentRef.current();
        previousRef.current = currentRef.current;
        currentRef.current = null;
      }
    }, timeout);

    return () => clearInterval(handle);
  }, [timeout]);
}
