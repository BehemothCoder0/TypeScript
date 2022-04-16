var Employee = /** @class */ (function () {
    function Employee(name, department) {
        this.name = name;
        this.department = department;
    }
    Employee.getInstance = function (name, department) {
        return new Employee(name, department);
    };
    return Employee;
}());
function DMain() {
    // for destructuring to work variables in class needs to be public
    var _a = Employee.getInstance("Siddu", "dept1"), name = _a.name, department = _a.department;
    console.log(name);
    console.log(department);
    // This is for renaming the variable to nm and dept instead of actual ones
    var _b = Employee.getInstance("Pradyu", "dept2"), nm = _b.name, dept = _b.department;
    console.log(nm);
    console.log(dept);
}
DMain();
