function grow(x) {
    let total = 1;
    for (let y of x) {
        total *= y;
    }
    return total;
}