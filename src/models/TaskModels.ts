import type { TaskStateModels } from "./TaskStateModels";

export type TaskModels = {
    id: number; 
    name: number; 
    duration: number; 
    startDate: number; 
    CompleteDate: number | null; 
    interruptDate: number | null; 
    type: keyof TaskStateModels['config']; 
}