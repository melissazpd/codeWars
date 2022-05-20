function findNeedle(haystack) {
    let position;
    for (let i = 0; i <= haystack.length; i++) {
        if (haystack[i] === 'needle') {
            position = i;
        }
    }

    return 'found the needle at position ' + position;
}