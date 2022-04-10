interface Animal{
    (breed:string):Animal;
    makeSound():void;
}


var nemo = <Animal> function(breed){
    
};

nemo("fish").makeSound();

// Now I need to add a new method such as walk, but I dont want to change animal interface instead
// I will extend by creating interface with the same name

interface Animal{
    walk():void;
}


var tauros = <Animal> function(breed){

}

tauros.walk();
tauros.makeSound();

