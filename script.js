const bigNumber = function (number) {
    if (number > 100) {
        return true;
    } else if (number < 100) {
        return false;
    }

}

const result = bigNumber(150);
console.log(result);


const brenda = function (number, age) {
    if (number <= 50 && age >= 18) {
        return "come in";
    } else if (number > 50) {
        return "it's too busy now, come back later";
    } else if (age < 18) {
        return "This is a club for adults"
    }
}

const result2 = brenda(35, 28);
console.log(result2);