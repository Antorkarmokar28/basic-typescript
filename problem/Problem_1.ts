//Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

const repeatString = (str: string, num: number): string => {
    return str.repeat(num);
}

console.log(repeatString('Hasan', 3));