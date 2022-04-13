function XO(str) {
    let xNum = 0;
    let oNum = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'o') {
            oNum += 1;
        } else if (str[i].toLowerCase() === 'x') {
            xNum += 1;
        }
    }

    if (oNum === xNum) {
        return true;
    } else if (str.includes('x') === false && str.includes('o') === false) {
        return true;
    } else {
        return false;
    }
}