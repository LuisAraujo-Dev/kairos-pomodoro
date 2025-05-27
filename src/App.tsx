import { Home } from "./pages/Homes";
import type { TaskStateModels } from "./models/TaskStateModels";

import "./styles/theme.css";
import "./styles/global.css";
import { useState } from 'react'

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
  const [state, setState] = useState(initialState);

  return (
    <Home state={state} setState={setState}/>
  );
}
