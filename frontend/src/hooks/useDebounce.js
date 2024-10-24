import { useEffect, useCallback } from "react";

function useDebounce(func, delay) {
  const debouncedFunction = useCallback(() => {
    const handler = setTimeout(() => {
      func();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [func, delay]);

  useEffect(() => {
    return () => {
      clearTimeout(debouncedFunction);
    };
  }, [debouncedFunction]);

  return debouncedFunction;
}

export default useDebounce;
