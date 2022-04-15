class NormalAnimal {
    constructor(animalName) {
        this.animalName = animalName;
    }
    eat() {
        return this.animalName + " eats";
    }
}
class Dog extends NormalAnimal {
    constructor() {
        super("Dog");
    }
    makeSound() {
        return "Bow Bow";
    }
}
class Cat extends NormalAnimal {
    constructor() {
        super("Cat");
    }
    makeSound() {
        return "Meow Meow";
    }
}
let bingo = new Dog();
console.log(bingo.eat());
console.log(bingo.makeSound());
let sylvester = new Cat();
console.log(sylvester.eat());
console.log(sylvester.makeSound());
