export function Tips() {
  <>
    {!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
    {!!state.activeTask && tipsForNoActiveTask[nextCycleType]}
  </>;
}

const tipsForWhenActiveTask = {
  workTime: <span>Foque por {state.config.workTime}min</span>,
  shortBreakTime: <span>Descanse por {state.config.shortBreakTime}</span>,
  longBreakTime: <span>Descanse por {state.config.longBreakTime}</span>,
};

const tipsForNoActiveTask = {
  workTime: <span>Próximo ciclo é de {state.config.workTime}min</span>,
  shortBreakTime: <span>Próximo descando será de {state.config.shortBreakTime}</span>,
  longBreakTime: <span>Próximo descando será de {state.config.longBreakTime}</span>,
};
