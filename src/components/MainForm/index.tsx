import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DeufaltInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { useRef } from "react";
import type { TaskModels } from "../../models/TaskModels";
import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formateSecondToMinutes } from "../../utils/formateSecondToMinutes";

export function MainForm() {
  const { state, setState } = useTaskContext();
  const TaskNameImput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (TaskNameImput.current === null) return;

    const TaskName = TaskNameImput.current.value.trim();

    if (!TaskName) {
      alert("Digite o nome da tarefa");
      return;
    }

    //ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    const newTask: TaskModels = {
      id: Date.now().toString(),
      name: TaskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemainig = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemainig,
        formattedSecondsRemaining: formateSecondToMinutes(secondsRemainig),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleInterruptedTask(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    setState((prevState) => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemainig: 0,
        formattedSecondsRemaining: "00:00",
      };
    });
  }
  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DeufaltInput
          labelText="task:"
          id="meuImput"
          type="text"
          placeholder="Digite algo"
          ref={TaskNameImput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25min</p>
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask && (
          <DefaultButton
            aria-label="Iniciar nova Tarefa"
            title="Iniciar nova Tarefa"
            icon={<PlayCircleIcon />}
            color="green"
          />
        )}
        {!!state.activeTask && (
          <DefaultButton
            aria-label="Interromper nova Tarefa"
            title="Interromper nova Tarefa"
            icon={<StopCircleIcon />}
            color="red"
            onClick={handleInterruptedTask}
          />
        )}
      </div>
    </form>
  );
}
