{
    //Inheritence
    // parent class
    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        };
        getSleep(numberOfHour: number){
            console.log(`${this.name} will sleep for ${numberOfHour} hour`);
        }
    }
    // child class
    class Student extends Parent {
        constructor(name: string, age: number, address: string){
            super(name, age, address);
        };
    }
    // child class
    class Teacher extends Parent {
        
        designation: string

        constructor(name: string, age: number, address: string, designation: string){
            super(name, age, address)
            this.designation = designation;
        };

        takeClass(classOfHour: number){
            console.log(`${this.name} take class ${classOfHour} hour`)
        }
    }

    const student1 = new Student('Antor Karmaker', 25, 'Ghatail, Tangail');
    student1.getSleep(7);

    const teacher = new Teacher('Mr. Dulal', 50, 'Dhaka Bangladesh', 'Professor');
    teacher.takeClass(1);
    //
}