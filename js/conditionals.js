"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
let colorInput = prompt("what is your favorite color");
analyzeColor(colorInput)
console.log(colorInput)

function analyzeColor(input){
    const inputLoweCase = input.toLowerCase()
    console.log(inputLoweCase)
    if (isNaN(inputLoweCase)){
        if (inputLoweCase === "blue"){
            alert ("berries are blue");
        } else if (inputLoweCase === "red"){
            alert("peppers are red");
        } else if (inputLoweCase === "green"){
            alert("peppers are green");
        } else if (inputLoweCase === "yellow"){
            alert("peppers are yellow");
        } else if (inputLoweCase === "orange"){
            alert("peppers are orange");
        } else if (inputLoweCase === "indigo"){
            alert("peppers are indigo");
        } else if (inputLoweCase === "violet"){
            alert("peppers are violet");
        } else{
            alert("not in color list");
        }
    } else {
        alert ("not a string");
    }
}
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
let analyzeColor2 = randomColor
console.log(randomColor)

if (analyzeColor2 === "red"){
    console.log("Some peppers are red")
} else if ( analyzeColor2 === "blue"){
    console.log("Not many foods are blue")
} else if (analyzeColor2 === "green"){
    console.log("the green in this food comes from cloraphyl")
} else if (analyzeColor2 === "yellow"){
    console.log("bananas are yellow")
} else if (analyzeColor2 === "orange"){
    console.log("Orange is a color and a food")
} else if (analyzeColor2 === "indigo"){
    console.log("indigo is just fancy blue")
} else if (analyzeColor2 === "violet"){
    console.log("go frogs")
} else {
    console.log( "Not sure about" + analyzeColor2)
}
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


let analyzeColor3 = prompt("what is your favorite color")
console.log(analyzeColor3)

switch (analyzeColor3) {
    case "red":
        console.log("Hey apples are red")
        break;
    case "blue":
        console.log("Hey berries are blue")
        break;
    case "green":
        console.log("Hey grapes are green")
        break;
    case "yellow":
        console.log("Hey bannanas are yellow")
        break;
    case "indigo":
        console.log("Hey nothing is indigo")
        break;
    case "violet":
        console.log("Hey flowers are violet")
        break;
    case "orange":
        console.log("Hey nothing rymes with orange")
        break;
     default:
         break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let analyzeColor4 = prompt("what is your favorite color")
console.log(analyzeColor4)

switch (analyzeColor4) {
    case "red":
        alert("Hey apples are red")
        break;
    case "blue":
        alert("Hey berries are blue")
        break;
    case "green":
        alert("Hey grapes are green")
        break;
    case "yellow":
        alert("Hey bannanas are yellow")
        break;
    case "indigo":
        alert("Hey nothing is indigo")
        break;
    case "violet":
        alert("Hey flowers are violet")
        break;
    case "orange":
        alert("Hey nothing rymes with orange")
        break;
}

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
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
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

//#############!!!!!! i did this all in the code above**************
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improve
 */
numberInput()

function numberInput() {
    let didConfirm = confirm("Would you like to play a game?");

    if (didConfirm) {
        let userInput = prompt("Please enter a number if you dare!");
        userInput = parseFloat(userInput);

        if (!isNaN(userInput)) {
            if (isEven(userInput)) {
                alert("Your Number is Even");
            } else {
                alert("Your Number is odd");
            }
            if (isPositive(userInput)) {
                alert("Your number is positive");
            } else {
                alert("your number is Negative");
            }
            alert(isCentury(userInput));
        } else {
            alert("Please enter a number!");
        }
    } else {
        alert("User did not want to play a game");
    }
}


function isEven (userInput) {
    return (userInput % 2 === 0);
}

function isPositive(userInput) {
    return (Math.sign(parseFloat(userInput)) === 1);
}

function isCentury(userInput){
    return ("Your number plus 100 is " + (userInput + 100));
}









