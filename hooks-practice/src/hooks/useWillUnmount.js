import { useEffect, useRef } from "react";

export function useWillUnmount(fn = () => 1) {
  const functionRef = useRef(fn);
  functionRef.current = fn;

  useEffect(() => {
    return () => functionRef.current();
  }, []);
}
