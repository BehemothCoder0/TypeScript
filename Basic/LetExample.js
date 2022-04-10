"use strict";
function LetTest() {
    // This is Javascript variable which does not have scope
    for (var i = 0; i < 10; i++) {
        // This is like the variable with scope declared in programming languages like Java and C#
        var variable = "Hello";
    }
    // No Error
    console.log(i);
    // Error because variable is defined in the loop scope, Uncomment to see error
    //console.log(variable);
}
