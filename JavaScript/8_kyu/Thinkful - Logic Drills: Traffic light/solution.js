function updateLight(current) {
    if (current === 'green') {
        current = 'yellow';
    } else if (current === 'yellow') {
        current = 'red';
    } else if (current === 'red') {
        current = 'green';
    }
    return current;
}