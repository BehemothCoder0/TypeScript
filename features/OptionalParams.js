class OptionalParams {
    countdown(start, end = 1, interval = 1) {
        var current = start;
        while (current > end) {
            console.log(current);
            current -= interval;
        }
    }
}
function OPmain() {
    var obj = new OptionalParams();
    obj.countdown(100, 1, 2);
}
OPmain();
