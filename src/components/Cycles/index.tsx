import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";

export function Cycles() {
  const {state} = useTaskContext(); 

  const cycleStep = Array.from({ length: state.currentCycle})

  console.log(cycleStep); 

  return (
    <div className={styles.cycles}>
      <span>Ciclos</span>

      <div className={styles.cyclesDots}>
        <span className={`${styles.cyclesDot} ${styles.WorkTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.WorkTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.WorkTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.WorkTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.longBreakTime}`}></span>
      </div>
    </div>
  );
}
