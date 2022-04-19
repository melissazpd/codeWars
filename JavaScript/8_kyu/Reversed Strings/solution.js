function solution(str) {
    let splitString = str.split("")
    let reverseArray = splitString.reverse();
    let newStr = reverseArray.join("");
    return newStr;
}