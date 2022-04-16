var Task = /** @class */ (function () {
    function Task(taskName) {
        var genNum = Task.numberGen++;
        this.taskName = taskName;
        this.taskId = genNum;
    }
    Object.defineProperty(Task.prototype, "getTaskId", {
        get: function () {
            return this.taskId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "getTaskName", {
        get: function () {
            return this.taskName;
        },
        enumerable: false,
        configurable: true
    });
    Task.numberGen = 0;
    return Task;
}());
var TaskService = /** @class */ (function () {
    function TaskService() {
        this.tasks = [];
    }
    TaskService.prototype.addTask = function (task) {
        this.tasks.push(task);
        return this.tasks.length;
    };
    TaskService.prototype.removeTask = function (taskId) {
        var tasksToBeDeleted = this.tasks.filter(function (task) { return task.getTaskId == taskId; });
        if (tasksToBeDeleted.length < 1) {
            throw "Task which needs to be deleted does not exist";
        }
        var indexOfTask = this.tasks.indexOf(tasksToBeDeleted[0]);
        this.tasks.splice(indexOfTask, 1);
    };
    TaskService.prototype.getAllTasks = function () {
        return this.tasks;
    };
    TaskService.prototype.getTask = function (taskName) {
        return this.tasks.filter(function (task) { return task.getTaskName === taskName; })[0];
    };
    return TaskService;
}());
var t1 = new Task("Eating");
var t2 = new Task("Walking");
var t3 = new Task("Sleeping");
var t4 = new Task("Playing");
var ts = new TaskService();
ts.addTask(t1);
ts.addTask(t2);
ts.addTask(t3);
var totalTasks = ts.addTask(t4);
console.log("Total tasks are:" + totalTasks);
var allTasks = ts.getAllTasks();
console.log(allTasks);
var fetchedTask = ts.getTask("Sleeping");
console.log("fetched task id is:" + fetchedTask.getTaskId);
ts.removeTask(fetchedTask.getTaskId);
var remainingTasks = ts.getAllTasks();
console.log(remainingTasks);
// Showing Errors
ts.removeTask(556);
