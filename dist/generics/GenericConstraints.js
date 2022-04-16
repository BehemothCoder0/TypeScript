var TotalLength = /** @class */ (function () {
    function TotalLength(x, y) {
        this.x = x;
        this.y = y;
    }
    TotalLength.prototype.getTotalLength = function () {
        return this.x.length + this.y.length;
    };
    return TotalLength;
}());
var ar = [1, 2, 3];
var ar2 = [1, 2];
var tlenOb = new TotalLength(ar, ar2);
console.log(tlenOb.getTotalLength());
var o1 = { length: 12 };
var o2 = { length: 456 };
var tlenOb2 = new TotalLength(o1, o2);
console.log(tlenOb2.getTotalLength());
