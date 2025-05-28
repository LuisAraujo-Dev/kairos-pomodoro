import { Home } from "./pages/Homes";
import type { TaskStateModels } from "./models/TaskStateModels";

import "./styles/theme.css";
import "./styles/global.css";
import { useState } from 'react'
import { TaskContextProvider } from "./contexts/TaskContext";

const initialState: TaskStateModels = {
  tasks: [],
  secondsRemainig: 0, 
  formattedSecondsRemaining: '00:00', 
  activeTask: null, 
  currentCycle: 0, 
  config: {
    workTime: 25, 
    shortBreakTime: 5, 
    longBreakTime: 15,
  }, 
  };

export function App() {
  // eslint-disable-next-line no-empty-pattern
  const [ ] = useState(initialState);

  return (
    <TaskContextProvider>
    <Home />
    </TaskContextProvider>
  );
}
