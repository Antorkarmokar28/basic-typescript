{
    //
    //constraints
    const addCourseToStudent = <
        T extends { id: number; name: string; email: string }
    >(student: T) => {
        const course = 'Next level web development';
        return {
            ...student,
            course,
        };
    };

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id: 455,
        name: 'Mr. x',
        email: 'm@gmail.com',
        devType: 'NLWD',
    });

    const student2 = addCourseToStudent({
        id: 456,
        name: 'Mr. y',
        email: 'y@gmail.com',
        hasWatch: 'Apple watch',
    });
    const student3 = addCourseToStudent({
        id: 457,
        name: 'Mr. z',
        email: 'z@gmail.com',
        emni: 'emni',
    })
    //
}