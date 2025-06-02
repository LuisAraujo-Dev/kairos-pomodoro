import type { TaskModels } from "../../models/TaskModels";

export enum TaskActionTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
}

export type TaskActionModels =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModels;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
      payload: TaskModels;
    };
