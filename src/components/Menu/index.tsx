import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from 'react'

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    console.log("Clicado", Date.now());

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Ir para Home"
        title="Ir para Home"
      >
        <HouseIcon />
      </a>

      <a
        href="#"
        className={styles.menuLink}
        aria-label="Ver hitórico"
        title="Ver hitórico"
      >
        <HistoryIcon />
      </a>

      <a
        href="#"
        className={styles.menuLink}
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>

      <a
        href="#"
        className={styles.menuLink}
        aria-label="Mudar de tema"
        title="Mudar de tema"
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
