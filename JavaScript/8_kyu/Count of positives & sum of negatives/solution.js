function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1) {
        return [];
    }

    let countPos = 0;
    let totalNeg = 0;
    let totalArr = [];

    for (let i = 0; i <= input.length; i++) {
        if (input[i] < 0) {
            totalNeg += input[i];
        } else if (input[i] > 0) {
            countPos++;
        }
    }

    totalArr.push(countPos, totalNeg);
    return totalArr;

}