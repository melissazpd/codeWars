function abbrevName(name) {
    let names = name.split(" ");

    let firstName = names[0];
    let lastName = names[1];

    return firstName[0].toUpperCase() + "." + lastName[0].toUpperCase();
}