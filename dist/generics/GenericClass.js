var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValuePair;
}());
var pair1 = new KeyValuePair("first", 1);
var pair2 = new KeyValuePair("Today's date", new Date(Date.now()));
var pair3 = new KeyValuePair("second", 2);
var KeyValuePairPrinter = /** @class */ (function () {
    function KeyValuePairPrinter(pairs) {
        this.pairs = pairs;
    }
    KeyValuePairPrinter.prototype.print = function () {
        for (var _i = 0, _a = this.pairs; _i < _a.length; _i++) {
            var pair = _a[_i];
            console.log("".concat(pair.key, ": ").concat(pair.value));
        }
    };
    return KeyValuePairPrinter;
}());
var printer = new KeyValuePairPrinter([pair1, pair3]);
printer.print();
