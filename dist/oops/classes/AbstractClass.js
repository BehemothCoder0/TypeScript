var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NormalAnimal = /** @class */ (function () {
    function NormalAnimal(animalName) {
        this.animalName = animalName;
    }
    NormalAnimal.prototype.eat = function () {
        return this.animalName + " eats";
    };
    return NormalAnimal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this, "Dog") || this;
    }
    Dog.prototype.makeSound = function () {
        return "Bow Bow";
    };
    return Dog;
}(NormalAnimal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super.call(this, "Cat") || this;
    }
    Cat.prototype.makeSound = function () {
        return "Meow Meow";
    };
    return Cat;
}(NormalAnimal));
var bingo = new Dog();
console.log(bingo.eat());
console.log(bingo.makeSound());
var sylvester = new Cat();
console.log(sylvester.eat());
console.log(sylvester.makeSound());
