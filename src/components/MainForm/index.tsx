import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DeufaltInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModels } from "../../models/TaskModels";
import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../../Tips";

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const TaskNameImput = useRef<HTMLInputElement>(null);

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (TaskNameImput.current === null) return;

    const taskName = TaskNameImput.current.value.trim();

    if (!taskName) {
      alert("Digite o nome da tarefa");
      return;
    }

    const newTask: TaskModels = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleInterruptedTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
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
        <Tips />
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
            type="submit"
            icon={<PlayCircleIcon />}
            color="green"
            key={"button_submit"}
          />
        )}
        {!!state.activeTask && (
          <DefaultButton
            aria-label="Interromper nova Tarefa"
            title="Interromper nova Tarefa"
            type="button"
            icon={<StopCircleIcon />}
            color="red"
            onClick={handleInterruptedTask}
            key={"button_buttom"}
          />
        )}
      </div>
    </form>
  );
}
