function digitize(n) {
    let numArray = Array.from(String(n), Number);
    return numArray.reverse();
}