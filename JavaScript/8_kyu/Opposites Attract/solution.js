function lovefunc(flower1, flower2) {
    if (flower1 % 2 == 0) {
        if (flower2 % 2 != 0) {
            return true;
        }
    } else {
        if (flower2 % 2 == 0) {
            return true;
        }
    }
    return false;
}