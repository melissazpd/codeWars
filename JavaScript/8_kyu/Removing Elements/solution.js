function removeEveryOther(arr) {
    let i = arr.length;

    while (i--) {
        if (i % 2 != 0) {
            arr.splice(i, 1);
        }
    }
    return arr;
}