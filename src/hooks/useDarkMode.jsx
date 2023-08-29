import { useEffect, useState } from "react";

const useDarkMode = () => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const [getThem, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ||
      (localStorage.getItem("theme") === null && darkQuery.matches),
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") || "system",
  );
  const element = document.documentElement;

  const onWindowMatch = () => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
      setTheme(true); // Update the state to true for dark mode
    } else {
      element.classList.remove("dark");
      setTheme(false); // Update the state to false for light mode
    }
  };

  useEffect(() => {
    const handleSystemThemeChange = (e) => {
      if (!("theme" in localStorage)) {
        if (e.matches) {
          element.classList.add("dark");
          setTheme(true); // Update the state to true for dark mode
        } else {
          element.classList.remove("dark");
          setTheme(false); // Update the state to false for light mode
        }
      }
    };

    switch (darkMode) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }

    onWindowMatch();
    darkQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      darkQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [darkMode]); //darkMode

  const handleDarkMode = () => {
    if (getThem) {
      setDarkMode("light");
      setTheme(false);
    } else {
      setDarkMode("dark");
      setTheme(true);
    }
  };

  return [getThem, handleDarkMode];
};

export default useDarkMode;
