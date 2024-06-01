import React from "react";
import useLocalStorage from "./use-local-storage";
import "./styles.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  function HandleThemeToggle() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
    console.log(theme);
  }

  return (
    <div className="light-dark-mode" theme-type={theme}>
      <div className="theme-container ">
        <p>Hello, You are using {theme} theme!</p>
        <button onClick={HandleThemeToggle}>Change Theme</button>
      </div>
    </div>
  );
}
