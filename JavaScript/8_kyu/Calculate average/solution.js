function find_average(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum / array.length;
}

// Does not check if the array is empty.

// Better solution below:

function find_average(array) {
    let sum = 0;

    if (!array.length) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
}