class Task{
    private taskId;
    private taskName;
    private static numberGen:number=0;
    constructor(taskName:string){
        var genNum = Task.numberGen++;
        this.taskName=taskName;
        this.taskId = genNum;
    }

    public get getTaskId(){
        return this.taskId;
    }

    public get getTaskName(){
        return this.taskName;
    }
}

interface ITaskService{
    addTask(task:Task):number;
    removeTask(taskId:number):void;
    getAllTasks():Task[];
    getTask(taskName:string):Task;
}

class TaskService implements ITaskService{
    private tasks:Task[];
    constructor(){  
        this.tasks=[];
    }

    public addTask(task:Task){
       this.tasks.push(task);
       return this.tasks.length;
    }

    public removeTask(taskId: number): void {
        let tasksToBeDeleted = this.tasks.filter(task=>task.getTaskId==taskId);
        if(tasksToBeDeleted.length<1){
            throw "Task which needs to be deleted does not exist";
        }
        var indexOfTask = this.tasks.indexOf(tasksToBeDeleted[0]);

        this.tasks.splice(indexOfTask,1);
    }

    public getAllTasks(): Task[] {
        return this.tasks;
    }

    getTask(taskName: string): Task {
        return this.tasks.filter(task=>task.getTaskName===taskName)[0];
    }
}

let t1:Task = new Task("Eating");
let t2:Task = new Task("Walking");
let t3:Task = new Task("Sleeping");
let t4:Task = new Task("Playing");

let ts:TaskService = new TaskService();
ts.addTask(t1);
ts.addTask(t2);
ts.addTask(t3);
let totalTasks = ts.addTask(t4);
console.log("Total tasks are:"+totalTasks);

let allTasks:Task[] = ts.getAllTasks();
console.log(allTasks);


let fetchedTask = ts.getTask("Sleeping");
console.log("fetched task id is:"+fetchedTask.getTaskId)

ts.removeTask(fetchedTask.getTaskId);

let remainingTasks:Task[] = ts.getAllTasks();
console.log(remainingTasks);

// Showing Errors
ts.removeTask(556);