import { MutableRefObject, useEffect, useState } from "react";

export const secondsToMinutes = (sec: number | undefined) => {
  if (!sec) return "00:00";
  sec = Math.trunc(+sec);
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;

  return (
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0")
  );
};

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
  ref: MutableRefObject<HTMLElement | null>,
  callback: () => void
): void => {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", (e) => handleClick(e));

    return () => {
      document.removeEventListener("click", (e) => handleClick(e));
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
