var FirstClass = /** @class */ (function () {
    /***
     * The below code declares the class field directly
     * in the constructor
     */
    function FirstClass(firstClassStrProp) {
        this.firstClassStrProp = firstClassStrProp;
        this.firstClassStrProp = firstClassStrProp;
    }
    FirstClass.prototype.getFirstClassProp = function () {
        return this.firstClassStrProp;
    };
    return FirstClass;
}());
var firstClassObj = new FirstClass("someprop");
console.log(firstClassObj.getFirstClassProp());
