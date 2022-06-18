function arithmetic(a, b, operator) {
    let total;

    switch (operator) {
        case 'add':
            total = a + b;
            break;
        case 'subtract':
            total = a - b;
            break;
        case 'multiply':
            total = a * b;
            break;
        case 'divide':
            total = a / b;
            break;
    }

    return total;
}