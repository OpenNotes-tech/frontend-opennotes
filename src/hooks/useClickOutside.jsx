import { useEffect } from "react";

const useClickOutside = (ref, callback, isEnabled) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target === ref.current) {
        callback();
      }
    };
    if (isEnabled) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, callback, isEnabled]);
};

export default useClickOutside;
