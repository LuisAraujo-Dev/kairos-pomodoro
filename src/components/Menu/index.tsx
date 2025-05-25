import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a href="#" className={styles.menuLink} aria-label="Ir para Home" title="Ir para Home">
        <HouseIcon />
      </a>

      <a href="#" className={styles.menuLink} aria-label="Ver hitórico" title="Ver hitórico">
        <HistoryIcon />
      </a>

      <a href="#" className={styles.menuLink} aria-label="Configurações" title="Configurações">
        <SettingsIcon />
      </a>

      <a href="#" className={styles.menuLink} aria-label="Mudar de tema" title="Mudar de tema">
        <SunIcon />
      </a>
    </nav>
  );
}
