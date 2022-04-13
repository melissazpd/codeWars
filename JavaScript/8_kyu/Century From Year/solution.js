function century(year) {
    let num = year % 100;
    if (num == 0) {
        return Math.floor(year / 100);
    } else if (num !== 0) {
        return Math.floor(year / 100) + 1;
    }
}