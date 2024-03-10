import { useEffect, useState } from "react";

export default function UseLocalStorage(key, default_value) {
  const [theme, setTheme] = useState(() => {
    let currentValue;

    try {
      currentValue = localStorage.getItem(key) || default_value;
    } catch (err) {
      currentValue = default_value;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, theme);

    if (key === "theme") {
      document.body.classList.add(theme);
      return () => document.body.classList.remove(theme);
    }
  }, [key, theme]);

  return [theme, setTheme];
}
