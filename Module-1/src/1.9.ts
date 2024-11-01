{
    type Student = {
        id: number,
        name: string,
        age: number,
        gender: string,
        contact?: string,
        address: string,
    }
    const student1: {
        id: number,
        name: string,
        age: number,
        gender: string,
        contact?: string,
        address: string,
    } = {
        id: 484,
        name: 'Antor karmaker',
        age: 26,
        gender: 'male',
        contact: '01771000000',
        address: 'Tangail'
    }

    const student2: Student = {
        id: 125,
        name: 'Kanon',
        age: 25,
        gender: 'male',
        address: 'Tangail'
    }

    type IsAdmin = boolean;
    type UserName = string;

    const isAdmin: IsAdmin = true;
    const useName:UserName = 'Antor Karmaker';

    type Add = (number1: number, number2: number) => number;

    const add: Add = (number1, number2) => number1 + number2;
    
    add(50, 51)

}