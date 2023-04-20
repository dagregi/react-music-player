import { MutableRefObject, useEffect, useState } from "react";

export const convertTime = (miliseconds: number): string => {
  const duration = ~~(miliseconds / 1000);

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

export const useOutsideClick = (
  ref: MutableRefObject<null>,
  callback: () => void
): void => {
  const handleClick = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
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
