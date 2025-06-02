import { type TaskStateModels } from "./TaskStateModels";

export type TaskModels = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null;
  interruptDate: number | null;
  type: keyof TaskStateModels["config"];
};
