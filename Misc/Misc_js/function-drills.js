function isEven (userInput) {
    return (userInput % 2 === 0);
}

function isOdd (userInput){
    return (userInput % 2 !== 0)
}

function isPositive(userInput) {
    return (Math.sign(parseFloat(userInput)) === 1);
}

function isMultipleOf (target, n) {
    if (target % n === 0)
        return "yes"
} else {
    return "no"
}
function degToRadian (userInput){
    return (userInput × Math.PI/180)
)
}