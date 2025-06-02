import { createContext } from "react";
import type { TaskStateModels } from "../../models/TaskStateModels";
import { initialTaskState } from "./InitalTaskState";
import type { TaskActionModels } from "./taskActions";


type TaskContextProps = {
  state: TaskStateModels;
  dispatch: React.Dispatch<TaskActionModels>;
};

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);