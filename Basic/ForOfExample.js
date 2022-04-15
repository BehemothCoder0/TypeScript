class ForOfExample {
    printArray(array) {
        for (var val of array) {
            console.log(val);
        }
    }
}
function FOEMain() {
    let obj = new ForOfExample();
    var intArr = [1, 2, 3, 4, 5];
    var strArray = ["apple", "mango", "banana", "peach", "orange"];
    obj.printArray(intArr);
    obj.printArray(strArray);
}
FOEMain();
