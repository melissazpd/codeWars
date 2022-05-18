var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = 0;
    let dogYears = 0;

    for (let i = humanYears; i > 0; i--) {
        if (i >= 3) {
            dogYears += 5;
            catYears += 4;
        } else if (i == 2) {
            dogYears += 9;
            catYears += 9;
        } else if (i == 1) {
            dogYears += 15;
            catYears += 15;
        }
    }

    return [humanYears, catYears, dogYears];
}
