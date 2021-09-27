class Animal {
    constructor(name: string) {}
    getAnimalName(){}
    makeSound(){}
}

class Cat extends Animal{
    constructor(name: string) { }
    makeSound() {
        return 'meyow'
    }
    countLegs() {
        return 4;
    }
}

class Mouse extends Animal {
    constructor(name: string) { }
    makeSound() {
        return 'mouse\'s voice';
    }
    countLegs() {
        return 4;
    }
}

class Elephant extends Animal {
    constructor(name: string) { }
    makeSound() {
        return 'whooo'
    }
    countLegs() {
        return 4;
    }
}
class Snake extends Animal {
    constructor(name: string) { }
    makeSound() {
        return 'shhhhh'
    }
    countLegs() {
        return 0;
    }
}
class Bird extends Animal {
    constructor(name: string) { }
    makeSound() {
        return 'kuku'
    }
    countLegs() {
        return 2;
    }
}



class AnimalStorage {
    getAnimal(animal: Animal){}
    saveAnimal(animal: Animal) {}
}

const animals = [
    new Cat('cat'),
    new Mouse('mouse'),
    new Elephant('elephant'),
]

function animalSound(animals) {
    for (let i = 0; i < animals.length; i++) {
        animals[i].makeSound();
    }
}

function countAnimalLegs() {
    for (let i = 0; i < animals.length; i++) {
        animals[i].countLegs();
    }
}

animalSound(animals);
countAnimalLegs();