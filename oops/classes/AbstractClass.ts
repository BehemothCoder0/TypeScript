abstract class NormalAnimal{
    private animalName:string;

    constructor(animalName:string){
        this.animalName=animalName;
    }

    public eat():string{
        return this.animalName+" eats";
    }

    abstract makeSound():string;
}


class Dog extends NormalAnimal{
    constructor(){
        super("Dog");
    }

    makeSound():string{
        return "Bow Bow";
    }

}

class Cat extends NormalAnimal{
    constructor(){
        super("Cat");
    }

    makeSound(): string {
        return "Meow Meow";
    }
}

let bingo:Dog = new Dog();
console.log(bingo.eat());
console.log(bingo.makeSound());

let sylvester:Cat = new Cat();
console.log(sylvester.eat());
console.log(sylvester.makeSound());