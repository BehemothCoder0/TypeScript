class Employee{
    public name:string;
    public department:string;
    private constructor(name:string,department:string){
        this.name=name;
        this.department=department;
    }
    public static getInstance(name:string,department:string):Employee{
        return new Employee(name,department);
    }
}

function DMain(){
    // for destructuring to work variables in class needs to be public
    var {name,department} = Employee.getInstance("Siddu","dept1");
    console.log(name);
    console.log(department);

    // This is for renaming the variable to nm and dept instead of actual ones
    var {name:nm,department:dept} = Employee.getInstance("Pradyu","dept2");
    console.log(nm);
    console.log(dept);    


}
DMain();