class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    static getInstance(name, department) {
        return new Employee(name, department);
    }
}
function DMain() {
    // for destructuring to work variables in class needs to be public
    var { name, department } = Employee.getInstance("Siddu", "dept1");
    console.log(name);
    console.log(department);
    // This is for renaming the variable to nm and dept instead of actual ones
    var { name: nm, department: dept } = Employee.getInstance("Pradyu", "dept2");
    console.log(nm);
    console.log(dept);
}
DMain();
