import { useEffect, useState } from "react";

export const useDebouncedValue = <T>(value: T, debounceMilliseconds = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, debounceMilliseconds);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, debounceMilliseconds]);

  return debouncedValue;
};
