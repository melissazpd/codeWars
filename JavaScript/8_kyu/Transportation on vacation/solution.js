function rentalCarCost(n) {
    if (n < 3) {
        return n * 40;
    } else if (n < 7 && n >= 3) {
        return (n * 40) - 20;
    } else {
        return (n * 40) - 50;
    }
}