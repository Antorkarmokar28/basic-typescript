{  //

    // function with generic
    const createArray = <T>(param: T): T[] => {
        return [param];
    }

    const res1 = createArray<string>('456');
    console.log(res1);

    type User = {
        name: string;
        age: number
    }

    const resGenericObje = createArray<User>({
        name: 'Antor Karmaker',
        age: 25,
    })
    // tuple with generic function
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    }
    interface User2 {
        height: number,
        age: number,
        isMarried: boolean,
    }

    const res2 = createArrayWithTuple<string, User2>('Antor Karmaker', {
        height: 5.8,
        age: 26,
        isMarried: false,
    })

    const addCourseToStudents = <T>(student: T) => {
        const course = 'Next level web development';
        return{
            ...student,
            course,
        }
    }
    const student1 = addCourseToStudents({
        name: 'Antor Karmaker',
        email: 'antor@gmail.com',
        devType: 'NLWD',
    });

    const student2 = addCourseToStudents({
        name: 'Ashik ahammed',
        email: 'ashik@gmail.com',
        hasWatch: 'Apple watch'
    });
    //
}