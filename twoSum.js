function findIndices(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const currentSum = numbers[left] + numbers[right];

        if (currentSum === target) {
            return [left, right];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null;
}

const numbersList = [2,3,4];
const targetSum = 6;

const result = findIndices(numbersList, targetSum);
console.log(result);
if (result) {
    console.log(`Indices of numbers adding up to ${targetSum}: ${result}`);
} else {
    console.log("No such numbers in the list.");
}
