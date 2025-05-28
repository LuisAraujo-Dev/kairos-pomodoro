import React, { createContext } from "react";
import type { TaskStateModels } from "../../models/TaskStateModels";

const initialState: TaskStateModels = {
  tasks: [],
  secondsRemainig: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

type TaskContextProps = {
  state: TaskStateModels;
  setState: React.Dispatch<React.SetStateAction<TaskStateModels>>;
};

export const taskContext = createContext<TaskContextProps>({
  state: initialState,
  setState: () => {},
});

type TaskContextProviderProps = {
    children: React.ReactNode; 
}

export function TaskContextProvider({children}: TaskContextProviderProps) {
    return <TaskContextProvider value={}>
        {children}
    </TaskContextProvider>
}