export type TaskModels = {
    id: number; 
    name: number; 
    duration: number; 
    startDate: number; 
    CompleteDate: number | null; 
    interruptDate: number | null; 
    type: 'workTime' | 'shortBreakTime' | 'longBreakTime'; 
}