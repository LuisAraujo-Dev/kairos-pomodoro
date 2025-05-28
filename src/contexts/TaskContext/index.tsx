import { createContext } from "react";
import type { TaskStateModels } from "../../models/TaskStateModels";

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