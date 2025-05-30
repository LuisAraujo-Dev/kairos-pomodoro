import React, { createContext, useContext, useState } from "react";
import type { TaskStateModels } from "../../models/TaskStateModels";

const initialState: TaskStateModels = {
  tasks: [],
  secondsRemainig: 0,
  formattedSecondsRemaining: "20:00",
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

const initialContextValue = {
  state: initialState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialState);
  return (
    <TaskContext.Provider value={{state , setState}}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
