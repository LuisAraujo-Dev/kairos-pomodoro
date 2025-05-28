import { createContext } from "react";
import type { TaskStateModels } from "../../models/TaskStateModels";

const initialState: TaskStateModels = {
  tasks: [],
  secondsRemainig: 0, 
  formattedSecondsRemaining: '00:00', 
  activeTask: null, 
  currentCycle: 0, 
  config: {
    workTime: 25, 
    shortBreakTime: 5, 
    longBreakTime: 15,
  }, 
  };

export const TaskContext = createContext({
    chave: '123',
});

type TaskContextProps = {
    state: TaskStateModels, 
    setState: React.Dispatch<React.SetStateAction<TaskStateModels>>
};

export const taskContext = createContext<TaskContextProps>({
    state: initialState, 
    setState: () => {}
})