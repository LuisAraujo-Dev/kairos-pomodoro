import type { TaskModels } from "./TaskModels";

export type TaskStateModels = {
  tasks: TaskModels[];
  secondsRemainig: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModels | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
