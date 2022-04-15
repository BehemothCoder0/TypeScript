class FirstClass {
    /***
     * The below code declares the class field directly
     * in the constructor
     */
    constructor(firstClassStrProp) {
        this.firstClassStrProp = firstClassStrProp;
        this.firstClassStrProp = firstClassStrProp;
    }
    getFirstClassProp() {
        return this.firstClassStrProp;
    }
}
var firstClassObj = new FirstClass("someprop");
console.log(firstClassObj.getFirstClassProp());
