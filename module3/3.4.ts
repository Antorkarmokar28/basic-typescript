{
    //Instanceof gaurd
    class Animals {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        };

        makeSound() {
            console.log('I am making sound');
        };
    };

    class Dog extends Animals {
        constructor(name: string, species: string) {
            super(name, species);
        };

        makeBark() {
            console.log('I am Barking');
        };
    };

    class Cat extends Animals {
        constructor(name: string, species: string) {
            super(name, species);
        };
        makeMeaw() {
            console.log('I am meawing');
        };
    };

    // smart way
    const isDog = (animal: Animals): animal is Dog => {
        return animal instanceof Dog;
    };
    const isCat = (animal: Animals): animal is Cat => {
        return animal instanceof Cat;
    }
    const getAnimal = (animal: Animals) => {
        if (isDog(animal)) {
            animal.makeBark();
        } else if (isCat(animal)) {
            animal.makeMeaw();
        } else {
            animal.makeSound();
        };
    }

    const dog = new Dog('Dog vai', 'Dog');
    const cat = new Cat('Cat vai', 'Cat');

    getAnimal(dog)

    //
}