var constantStr = "Some Constant";
var ConstantExample = /** @class */ (function () {
    function ConstantExample() {
    }
    ConstantExample.prototype.modifyConstant = function (str) {
        // Error cannot assign the constant string, Uncomment to see error
        //constantStr = str;
    };
    return ConstantExample;
}());
