const bigNumber = function (number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
};

const result = bigNumber(120);
console.log(result);

console.log(bigNumber(99));
console.log(bigNumber(268));


const brenda = function (maxV, currentV, ageV) {
    if (ageV < 18) {
        return "This is a club for adult"
    }

    if (currentV >= maxV) {
        return "It's too busy now, come back later";
    } else {
        return "Come in";
    }
};

const result2 = brenda(350, 100, 20);
console.log(result2);

console.log(brenda(350, 400, 28));
console.log(brenda(350, 180, 16));


const calculateAverage = function (number1, number2, number3, number4, number5) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
};

console.log(calculateAverage(2, 4, 6, 8, 10));
console.log(calculateAverage(1, 2, 3, 4, 5));
console.log(calculateAverage(0, 0, 2, 2, 1));