import { useEffect } from 'react';

export function useDebounce(fn = () => 1, timeout = 1000) {
  useEffect(() => {
    const handle = setTimeout(fn, timeout);

    return () => clearTimeout(handle);
  }, [fn, timeout]);
};
