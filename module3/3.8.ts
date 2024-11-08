{
    //Polymorphism
    class Person {
        getSleep(){
            console.log('I am sleeping for 8 hours per day');
        };
    };

    class Student extends Person {
        getSleep() {
            console.log('I am sleeping for 7 hours per day');
        };
    };
    class Developer extends Person {
        getSleep(){
            console.log('I am sleeping for 6 hours per day');
        };
    };
    const getSleepingHours = (param: Person) => {
        param.getSleep();
    }
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);

    class Shape {
        getArea(): number {
            return 0;
        }
    }
    class Circle extends Shape {
        radius: number;
        constructor(radius: number){
            super();
            this.radius = radius;
        };
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        };
    };

    const getShapeArea = (param: Shape) => {
        console.log(param.getArea());
    }
    const shape1 = new Shape();
    const shape2 = new Circle(10);
    getShapeArea(shape1);
    getShapeArea(shape2);
    //
}