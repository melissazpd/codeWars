function positiveSum(arr) {
    let total = 0;

    for (let num of arr) {
        if (num > 0) {
            total += num;
        } else {
            total += 0;
        }
    }

    return total;

}