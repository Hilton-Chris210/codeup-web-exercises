let luckyNumber = Math.floor(Math.random() * 6);
console.log(luckyNumber)
let randomNumber = Math.floor(Math.random(1) * 100);
console.log(randomNumber)
let zeroDiscount = 1
let oneDiscount = .90
let twoDiscount = .75
let threeDiscount = .65
let fourDiscount = .50
let fiveDiscount = 0

function calculateTotal(ln, ta){
if (luckyNumber === 0){
    alert("Sorry no discount")
    alert("your total before discount is $" + randomNumber)
    alert("Your total with discount is $" + randomNumber*zeroDiscount)
    alert("You saved $" + (randomNumber-(randomNumber*zeroDiscount)))


} else if ( luckyNumber === 1){
    alert("Congrats you get a %10 discount")
    alert("your total before discount is $" + randomNumber)
    alert("Your total with discount is $" + randomNumber*oneDiscount)
    alert("You saved $" + (randomNumber-(randomNumber*oneDiscount)))

} else if (luckyNumber === 2){
    alert("Congrats you get a %25 discount")
    alert("your total before discount is $" + randomNumber)
    alert("Your total with discount is $" + randomNumber*twoDiscount)
    alert("You saved $" + (randomNumber-(randomNumber*twoDiscount)))

} else if (luckyNumber === 3){
    alert("Congrats you get a %35 discount")
    alert("your total before discount is $" + randomNumber)
    alert("Your total with discount is $" + randomNumber*threeDiscount)
    alert("You saved $" + (randomNumber-(randomNumber*threeDiscount)))
} else if (luckyNumber === 4){
    alert("Congrats you get a %50 discount")
    alert("your total before discount is $" + randomNumber)
    alert("Your total with discount is $" + randomNumber*fourDiscount)
    alert("You saved $" + (randomNumber-(randomNumber*fourDiscount)))
} else if (luckyNumber === 5){
    alert("Congrats you get a %100 discount... aka FREE")
    alert("your total before discount is $" + randomNumber)
    alert("Your total with discount is $" + randomNumber*fiveDiscount)
    alert("You saved $" + (randomNumber-(randomNumber*fiveDiscount)))

}}

console.log(calculateTotal(luckyNumber, randomNumber))
console.log("The Lucky number is " +luckyNumber)
console.log("Total is $" + randomNumber )