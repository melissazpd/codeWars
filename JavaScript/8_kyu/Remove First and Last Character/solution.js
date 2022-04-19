function removeChar(str) {
    let removeFirstChar = str.slice(1);
    let removeLastChar = removeFirstChar.slice(0, removeFirstChar.length - 1);

    return removeLastChar;
};