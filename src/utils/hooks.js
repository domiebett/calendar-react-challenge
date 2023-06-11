import { useEffect } from "react";

export const useCloseOnClickOutside = (ref, callback) => {
  useEffect(() => {
    const closeOnClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", closeOnClickOutside);

    return () => {
      document.removeEventListener("mousedown", closeOnClickOutside);
    };
  }, [ref, callback]);
};
