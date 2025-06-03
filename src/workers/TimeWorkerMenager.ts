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

    postMessage(message: any) {
        this.worker.postMessage(message);
    }

    onmessage(cb: (e: MessageEvent) => void) {
        this.worker.onmessage = cb;
    }

    terminate() {
        this.worker.terminate();
        instance = null;
    }
}