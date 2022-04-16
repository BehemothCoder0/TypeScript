var _a;
var prefix = "Person";
// The below code will result in error, uncomment to see it
/*var person = {
    prefix+"Name": "Siddu",
    prefix+"Age": 24,
    prefix+"Hobby": "Skiiling"
};*/
var person = (_a = {},
    _a[prefix + "Name"] = "Siddu",
    _a[prefix + "Age"] = 24,
    _a[prefix + "Hobby"] = "Skiiling",
    _a);
console.log(person);
