{
    //class

    class Animal {
        
        // Perametr properties (modifire name public)
        constructor(public name: string, public species: string, public sound:string){};

        // method
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    
    const dog = new Animal("Prince vai", "Dog", "Ghew Ghew");
    const cat = new Animal('Menu', 'cat', 'Mew Mew');
    dog.makeSound();
    cat.makeSound();
    //
}