function OptionalParams2(_a) {
    var initial = _a.initial, _b = _a.final, final = _b === void 0 ? 1 : _b, _c = _a.step, step = _c === void 0 ? 1 : _c;
    var current = initial;
    while (current > final) {
        console.log(current);
        current -= step;
    }
}
var params = {
    "initial": 30,
    "final": 10,
    "step": 2
};
OptionalParams2(params);
