var SpreadOperatorDemo = /** @class */ (function () {
    function SpreadOperatorDemo() {
    }
    SpreadOperatorDemo.prototype.computeTotal = function () {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i] = arguments[_i];
        }
        var total = 0;
        for (var _a = 0, array_1 = array; _a < array_1.length; _a++) {
            var num = array_1[_a];
            total += num;
        }
        return total;
    };
    SpreadOperatorDemo.prototype.concatToAnExistingArray = function (arr1) {
        var arr2 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            arr2[_i - 1] = arguments[_i];
        }
        arr1.push.apply(arr1, arr2);
        return arr1;
    };
    return SpreadOperatorDemo;
}());
function SOMain() {
    var obj = new SpreadOperatorDemo();
    console.log(obj.computeTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));
    var firstArray = [1, 2, 3, 4, 5];
    console.log(obj.concatToAnExistingArray(firstArray, 6, 7, 8));
}
SOMain();
