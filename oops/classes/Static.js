// Before ES6
function ObsoleteService() {
    this.field = 0;
}
ObsoleteService.prototype.incrementFieldValue = function () {
    this.field++;
};
ObsoleteService.staticField = 0;
ObsoleteService.prototype.incrementStaticField = function () {
    ObsoleteService.staticField++;
};
ObsoleteService.prototype.getFieldValue = function () {
    return this.field;
};
ObsoleteService.prototype.getStaticFieldValue = function () {
    return ObsoleteService.staticField;
};
var ob1 = new ObsoleteService();
ob1.incrementFieldValue();
ob1.incrementFieldValue();
// The value should be 2;
console.log("The field value is:" + ob1.getFieldValue());
ob1.incrementStaticField();
var ob2 = new ObsoleteService();
// Value should be 0
console.log("The field value is:" + ob2.getFieldValue());
ob2.incrementStaticField();
// Should be 2
console.log("The static field value is:" + ob2.getStaticFieldValue());
// Now in Typescript
class StaticClass {
    constructor(field) {
        this.field = field;
        this.field = field;
    }
    incrementFieldValue() {
        this.field++;
    }
    static incrementStaticFieldValue() {
        StaticClass.staticField++;
    }
    getField() {
        return this.field;
    }
    static getStaticField() {
        return StaticClass.staticField;
    }
}
StaticClass.staticField = 0;
var sob = new StaticClass(12);
sob.incrementFieldValue();
sob.incrementFieldValue();
// Value is 14
console.log("The field value is:" + sob.getField());
StaticClass.incrementStaticFieldValue();
var sob2 = new StaticClass(15);
sob2.incrementFieldValue();
// value is 16
console.log("The field value is:" + sob2.getField());
StaticClass.incrementStaticFieldValue();
// value is 2
console.log("The static field value is:" + StaticClass.getStaticField());
