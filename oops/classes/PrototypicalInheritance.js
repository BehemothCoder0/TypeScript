// Create a function object
function Service() {
    this.serviceObjs = [];
}
/**
 * Now we are inheriting the function object by adding the prototype to the actual function object where
 * we only have one member that is serviceObjs
 * */
Service.prototype.getAllServiceObjects = function () {
    return this.serviceObjs;
};
var ob1 = new Service();
var ob2 = new Service();
var ob3 = new Service();
var actualServiceObj = new Service();
actualServiceObj.serviceObjs = [ob1, ob2, ob3];
console.log(actualServiceObj.getAllServiceObjects());
