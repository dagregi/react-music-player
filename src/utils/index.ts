import { useEffect, useState } from "react";

export const convertTime = (duration: number) => {
  const hrs = ~~(duration / 3600);
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;

  let ret = "";

  if (hrs > 1) {
    ret += "" + hrs + " hours ";
  } else if (hrs === 1) {
    ret += "" + hrs + " hour ";
    ret += "" + mins + " min ";
    ret += "" + secs + " sec ";
  } else if (hrs === 0) {
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
  }

  return ret;
};

export const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
};
