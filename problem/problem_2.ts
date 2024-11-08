// Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.
{
    //
    const findLargestNumber = (nums: number[]) => {
        return Math.max(...nums);
    };

    console.log(findLargestNumber([10, 5, 8, 20, 3]));
    //
}