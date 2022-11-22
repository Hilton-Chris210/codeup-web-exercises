"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    return "Hello, " + name + "!"
}
console.log(sayHello("tedCruz"))
// arrow
const sayHello2 = (name2) => {
   return `Hello, ${name2}!`
}
console.log(sayHello2("nancy"))

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
let helloMessage = sayHello("Chris")
console.log(helloMessage)

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = "Chris"
let helloMessage2 = sayHello(myName)
console.log(helloMessage2)


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
let random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(random){
        return (random === 2);
}
console.log("the rendom number generated is " + random)
console.log(isTwo(random))
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip(tip, salesTotal){
    return tip * salesTotal
}
console.log(calculateTip(.30, 70.00));
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
let random2 = Math.floor((Math.random() * 100) + 1);
// console.log("this is random2 number " + random2)
alert("Your bill is " + "$" + random2);
let userInputTipPercent = prompt('Please insert tip percent:', "20");
let userInputTipDecimle = userInputTipPercent / 100
let tipAmount = (random2 * userInputTipDecimle)
let totalBill = (random2 + tipAmount)
alert("Your tip amount is " + "$" + tipAmount.toFixed(2))
alert("Your grand total is " + "$" + totalBill.toFixed(2))
console.log("Your bill is $" + random2 + ". You tipped %" + userInputTipPercent + "/ $" + tipAmount + ". Your total with tip is $" + totalBill)


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(originalPrice, discountPercent){
   let newPrice = originalPrice - (originalPrice * discountPercent)
    console.log("This is the new price" + newPrice)
    return newPrice
}
console.log(applyDiscount(200.00,.10))

