var ForOfExample = /** @class */ (function () {
    function ForOfExample() {
    }
    ForOfExample.prototype.printArray = function (array) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var val = array_1[_i];
            console.log(val);
        }
    };
    return ForOfExample;
}());
function FOEMain() {
    var obj = new ForOfExample();
    var intArr = [1, 2, 3, 4, 5];
    var strArray = ["apple", "mango", "banana", "peach", "orange"];
    obj.printArray(intArr);
    obj.printArray(strArray);
}
FOEMain();
