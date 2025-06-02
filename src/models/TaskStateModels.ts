import type { TaskModels } from "./TaskModels";

export type TaskStateModels = {
  tasks: TaskModels[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModels | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
