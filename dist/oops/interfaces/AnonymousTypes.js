/**
 * Let us create a function, which aggregates the length properties of all objects
 */
/***
 * As you can see it accepts any object which has the length property
 */
function aggregateLength(x, y) {
    return x.length + y.length;
}
// The below code works because, both String and Array have length properties
aggregateLength("siddu", [1, 2, 3]);
// So in a nutshell what we are trying to do we are passing a type to the function which is anonymous
// but only if it has length property
