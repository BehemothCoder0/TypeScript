const prefix:string = "Person";
// The below code will result in error, uncomment to see it
/*var person = {
    prefix+"Name": "Siddu",
    prefix+"Age": 24,
    prefix+"Hobby": "Skiiling"
};*/

var person = {
    [prefix+"Name"]: "Siddu",
    [prefix+"Age"]: 24,
    [prefix+"Hobby"]: "Skiiling"
};

console.log(person);
