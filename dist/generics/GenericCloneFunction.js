function clone(value) {
    var jsonStr = JSON.stringify(value);
    return JSON.parse(jsonStr);
}
var str = "String";
clone(str);
var num = 124;
clone(num);
var build1 = new constructBuilding();
clone(build1);
