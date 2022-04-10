var OptionalParams = /** @class */ (function () {
    function OptionalParams() {
    }
    OptionalParams.prototype.countdown = function (start, end, interval) {
        if (end === void 0) { end = 1; }
        if (interval === void 0) { interval = 1; }
        var current = start;
        while (current > end) {
            console.log(current);
            current -= interval;
        }
    };
    return OptionalParams;
}());
function OPmain() {
    var obj = new OptionalParams();
    obj.countdown(100, 1, 2);
}
OPmain();
