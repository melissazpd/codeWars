function findSum(n) {
    let totalSum = 0;

    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            totalSum += i;
        }
    } return totalSum;
}