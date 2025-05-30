import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    workTime: 'foco', 
    shortBreakTime: 'descanso curto', 
    longBreakTime: 'descanso longo'
  }

  return (
    <div className={styles.cycles}>
      <span>Ciclos</span>

      <div className={styles.cyclesDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              className={`${styles.cyclesDot} ${styles[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
