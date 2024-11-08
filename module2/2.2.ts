{
    //

    //Interface
    type User1 = {
        name: string,
        age: number
    }
    interface User2 {
        name: string,
        age: number,
    }
    const user: User2 = {
        name: 'Antor Karmaker',
        age: 26,
    }

    type userWithRole1 = User1 & { role: string }

    const user3: userWithRole1 = {
        name: 'Antor karmaker',
        age: 26,
        role: "Manager"
    }

    interface userWithRole2 extends User2 {
        role: string,
    }

    const user4: userWithRole2 = {
        name: 'Kanon',
        age: 45,
        role: 'Sub Manager'
    }
    // js object, array -> object, function -> object

    type RoleNumber = number[];

    const Role: RoleNumber = [5, 7, 11, 15];

    interface ClassRole {
        [index: number]: number;
    }
    const classesAllRole: ClassRole = [1, 8, 11, 16];

    type Add = (numb1: number, numb2: number) => number;
    
    interface Multiple {
        (numb1: number, numb2: number): number,
    }

    const add: Add = (number1, number2) => number1 + number2;
    const multiple: Multiple = (number1, number2) => number1 * number2;

    //
}