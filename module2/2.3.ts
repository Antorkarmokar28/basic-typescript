{
    //
    //generic type

    // Array of number, array of string, array of boolean
    type GenericArray<T> = Array<T>;

    // const roleNumbers: number[] = [1, 8, 6];
    const roleNumbers: GenericArray<number> = [1, 8, 6];
    // const mentors: string[] = ['Mr. x', 'Mr. y', 'Mr. z'];
    const mentors: GenericArray<string> = ['Mr. x', 'Mr. y', 'Mr. z'];
    // const booleanArray: boolean[] = [true, false, true];
    const booleanArray: GenericArray<boolean> = [true, false, true];

    // Generic types object
    const user: GenericArray<{name: string, age: number}> = [
        {
            name: 'Antor karmaker',
            age: 26,
        },
        {
            name: 'Jhangkar Mahabub',
            age: 40,
        },

    ];

    // Generic type tuple
    type GenericTuple<x, y> = [x, y];

    const human: GenericTuple<string, string> = ['Mr. x', 'Mr. y']
    
    const userWithId: GenericTuple<number, {name: string, age: number}> = [123, {name: 'Antor Karmaker', age: 25}]
    //
}