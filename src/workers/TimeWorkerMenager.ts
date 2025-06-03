let instance: TimeWorkerManeger | null = null; 

export class TimeWorkerManeger {
    private worker: Worker; 

    private constructor () {
        this.worker = new Worker( new URL('./timerWorker.js', import.meta.url))
    }

    static getIntance() {
        if (!instance) {
            instance = new TimeWorkerManeger(); 
        }

        return instance; 
    }
}