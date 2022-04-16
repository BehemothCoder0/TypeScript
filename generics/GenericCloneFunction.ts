function clone<GenObj>(value:GenObj):GenObj{
    var jsonStr = JSON.stringify(value);
    return JSON.parse(jsonStr);
}

let str:string = "String";
clone(str);

let num:number = 124;
clone(num);

let build1:ConstructBuilding = new constructBuilding();
clone(build1);
