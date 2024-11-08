{
    //You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.

    //Hints: Use a reduce() method to sum the grades. average = total grades/ total length

    interface Student {
        name: string;
        age: number;
        grades: number[];
    }
    const calculateAverageGrade = (stu: Student): number => {
        const totalGrades = stu.grades.reduce((accu, grades) => accu + grades, 0);
        return totalGrades / stu.grades.length;
    }

    console.log(calculateAverageGrade({
        name: "Bob",
        age: 17,
        grades: [75, 80, 82, 88, 90]
    }));
    //
}