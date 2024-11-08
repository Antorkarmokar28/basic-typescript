{
    //Abstraction interface, abstraction
    // idea
    interface Vehicle {
        startEngine(): void;
        stopEngine(): void;
        moveCar(): void;
    };
    // realtime emplements
    class Car implements Vehicle {
        startEngine(): void {
            console.log(`I am start the car engine`);
        };
        stopEngine(): void {
            console.log(`I am stop the car engine`);
        };
        moveCar(): void {
            console.log(`The car moving`);
        };
    };

    const toyataCar = new Car();
    toyataCar.startEngine();

    // abstraction
    abstract class Car1 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract moveCar(): void;
        test(){
            console.log(`I am testing`);
        }
    }  
    class ToyotaCar extends Car1{
        startEngine(): void {
            console.log(`I am start the car engine`);
        };
        stopEngine(): void {
            console.log(`I am stop the car engine`);
        };
        moveCar(): void {
            console.log(`The car moving`);
        };
    };

    //
}