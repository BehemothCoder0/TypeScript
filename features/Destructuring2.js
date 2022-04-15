function OptionalParams2({ initial, final = 1, step = 1 }) {
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
