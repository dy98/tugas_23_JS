function filterAngka() {
    let numbers = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

    function number(n) {
        return n > 15;
    }
    console.log(numbers.filter(number));

    return numbers;
}
filterAngka();