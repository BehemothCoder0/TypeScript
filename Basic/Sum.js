var Sum = /** @class */ (function () {
    function Sum(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Sum.prototype.add = function () {
        return this.num1 + this.num2;
    };
    return Sum;
}());
