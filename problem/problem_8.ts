{
    //Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.
    class Car {
        constructor(
            public brand: string,
            public model: string,
            public year: number,
        ) { };

        displayInfo(): string {
            return (`Your car brand name ${this.brand} this car model is ${this.model} and publish the car in market ${this.year}`);
        };
    }
    const myCar = new Car('BMW', 'A25', 2018);
    console.log(myCar.displayInfo());
    //
}