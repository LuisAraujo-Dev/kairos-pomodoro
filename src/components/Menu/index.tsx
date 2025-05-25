import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = (
      localStorage.setIten('theme') as AvailableThemes) || 'dark';
      return storageTheme;
  });

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem('theme', theme); 
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
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
