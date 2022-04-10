// Here in the below function we can use either types for the arguments

function MultiFunc(x:(string | string[]),y:(number[]|string)){
    
    console.log("X starts");
    if(typeof x === "string"){
        console.log(x.charAt(0));
    }
    if(x instanceof Array){
        x.push("Siddu");
        x.push("pradyu");
        console.log(x)
    }

    console.log("Y starts");
    if(y instanceof Array){
        y.push(1);
        y.push(2);
        console.log(y);
    }

    if(typeof y === "string"){
        console.log(y.charAt(y.length-1));
    }
}

MultiFunc("siddu",[]);
MultiFunc([],[]);
MultiFunc("siddu","pradyu");
MultiFunc([],"pradyu");