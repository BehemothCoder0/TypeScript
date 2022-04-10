// Generated Javascript does not understand anything
interface GenericAnimal{
    breed: string;
}

// This shows error since we did not use the field breed, Uncomment to see
//var obj:Animal = {};

/**
 * There are two ways to solve above issue
    * 1. Add the field to the object, But the field type needs to be the same which is defined in an interface
    * 2. Cast the object explicitly to the interface type
    *   BE FOREWARNED BECAUSE INTERFACE THE EXPLICIT CASTING DOES NOT CHECK FOR MISSING PROPERTIES
 */

var dog:GenericAnimal={
    breed:"labrador"
}

// Now it does not show error because we explicitly typecasted to  Animal, often typecasting is discouraged
var obj:GenericAnimal = <GenericAnimal>{}