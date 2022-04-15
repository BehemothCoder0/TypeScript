class Task {
    constructor(taskName) {
        var genNum = Task.numberGen++;
        this.taskName = taskName;
        this.taskId = genNum;
    }
    get getTaskId() {
        return this.taskId;
    }
    get getTaskName() {
        return this.taskName;
    }
}
Task.numberGen = 0;
class TaskService {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
        return this.tasks.length;
    }
    removeTask(taskId) {
        let tasksToBeDeleted = this.tasks.filter(task => task.getTaskId == taskId);
        if (tasksToBeDeleted.length < 1) {
            throw "Task which needs to be deleted does not exist";
        }
        var indexOfTask = this.tasks.indexOf(tasksToBeDeleted[0]);
        this.tasks.splice(indexOfTask, 1);
    }
    getAllTasks() {
        return this.tasks;
    }
    getTask(taskName) {
        return this.tasks.filter(task => task.getTaskName === taskName)[0];
    }
}
let t1 = new Task("Eating");
let t2 = new Task("Walking");
let t3 = new Task("Sleeping");
let t4 = new Task("Playing");
let ts = new TaskService();
ts.addTask(t1);
ts.addTask(t2);
ts.addTask(t3);
let totalTasks = ts.addTask(t4);
console.log("Total tasks are:" + totalTasks);
let allTasks = ts.getAllTasks();
console.log(allTasks);
let fetchedTask = ts.getTask("Sleeping");
console.log("fetched task id is:" + fetchedTask.getTaskId);
ts.removeTask(fetchedTask.getTaskId);
let remainingTasks = ts.getAllTasks();
console.log(remainingTasks);
// Showing Errors
ts.removeTask(556);
