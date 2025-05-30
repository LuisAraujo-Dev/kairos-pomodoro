import { createContext } from "react";
import { initialTaskState } from "./InitalTaskState";
import type { TaskStateModels } from "../../models/TaskStateModels";

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

type TaskContextProps = {
  state: TaskStateModels;
  setState: React.Dispatch<React.SetStateAction<TaskStateModels>>;
};