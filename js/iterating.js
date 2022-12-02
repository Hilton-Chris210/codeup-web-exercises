// What is an array? Element? Index? An array is a data structure that holds an ordered list of items. An item in an array are called elements and they are seperated by commas. arrays are xero indexed which means that the first element in an array is xero index.
//     How would you access the first element in an array?
//     var numbers = [1, 2, 3, 4];
//          console.log(numbers[0]); // 1
//     What happens when you access an element at an index that has not been assigned a value?
// var numbers = [1, 2, 3, 4];
// console.log(numbers[5]); // undefined
//     What are the differences between a for loop and forEach loop? Why use one over the other?
// The forEach method on an array takes another function as a parameter and doesn't have a return value. The function passed to forEach takes in up to 3 parameters that will provide access to the array element, the corresponding index, and the array itself. We can refer to the function passed to .forEach as a callback function. The callback function will be called for every item in the array.

(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ["Bob", "Doug", "Jeff", "Jane" ]

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length)

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

})();

"use strict";

// ============================= Arrays Definition

/*
    In JS, an array is a special object data type that may contain
    a collection of multiple data types at numeric indices.

    In other words, an array allows us to store and access multiple values (elements)
    through one variable name (array name) and a specific index number.

        Array of animals...
         _______  _______  _______  _______
        |       ||       ||       ||       |
        |  DOG  ||  CAT  ||  EGG  ||  EMU  |
        |       ||       ||       ||       |
         -------  -------  -------  -------
         Index 0  Index 1  Index 2  Index 3

    Arrays may contain no defined elements, one, or many.

    Arrays in JS may contain elements of mixed types.

    Several array methods and properties are built in to JS to work with arrays.
*/

// ============================= Declaring/Initializing an Array with Array Literal Syntax

// empty arrays may be declared...


// let pies = [];
// console.log(pies);

// let pies = ["apple", "cherry", "key lime", "huckleberry"];
// console.log(pies);

// declaring and initializing a large array

// let students = [
//     "Justin",
//     "Javier",
//     "Laura",
//     "Isaac",
//     "Trevor",
//     "Dane",
//     "Ryan",
//     "Vivian"
// ];
//
//
// // 3
//
// console.log(students[students.length - 1]);
//
//
//
// console.log(students[100]);



// !! What index is student 1 at? 0

// Student 7?
//  Student 8?


// separate declaration and initialization

// let pies = [];
// pies[0] = "apple";
// pies[1] = "cherry";




// console.log(pies);

// declaring and initializing a high index number

// pies[10] = "huckleberry";
// console.log(pies);
//
// console.log(pies[0]);
//
// pies[0] = 'vanilla';
//
// console.log(pies);



// ============================= Counting Array Items

// let pies = ["apple", "cherry", "key lime", "huckleberry"];
// let numberOfPies = pies.length;
// console.log(numberOfPies);


// ============================= Accessing Array Elements

// console.log(pies[100]);
// console.log(pies[3]);

// ============================= !! MINI-EXERCISE 1 !!

/*
    1. Create an array of three of your classmates.
    2. Practice console logging each classmate separately.
    3. Reassign the second element to be the string "Justin".
 */

// ============================= For Loop

/* SYNTAX

    for (let i = 0; i < someArray.length; i += 1) {
        console.log(someArray[i]);
    }

    - in the above context "someArray[i]" will access the next array element in each iteration

    - PROS: variety of traversals
    - CONS: more complicated syntax
    -  USE: when you need to iterate partially or backwards through an array

 */

// example

// let pies = ["apple", "cherry", "key lime", "huckleberry"];

// console.log(pies);
//
// for (let i = 0; i < pies.length; i += 1) {
//     console.log("I like " + pies[i]);
// }

// backwards
// let pies = ["apple", "cherry", "key lime", "huckleberry"];
// for (let i = pies.length - 1; i >= 0; i -= 1) {
//     console.log("I like " + pies[i]);
// }
//
// console.log(pies);

// !! How could we print out every other pie from the beginning of the array to the end? !!


// ============================= ForEach Loop

/* SYNTAX

    someArray.forEach(function(element, index, array){
        console.log(element);
        console.log(index);
    });

    - PROS: simpler syntax, easier to read
    - CONS: can only increment through entire array
    -  USE: when you need to iterate through entire array

    REMINDERS...
    - the parameters are optional to pass in to the anonymous function
    - parameters may be semantically named but order matters


    WORKS KINDA LIKE THIS:

    let theArray = [some elements...];
    function forEach(callback) {
        for (let i = 0; i < elements.length; i += 1) {
            callback(element[i], i, theArray);
        }
    }

 */


// standard syntax
//     let pies = ["apple", "cherry", "key lime", "huckleberry"];

// for (let i = 0; i < pies.length; i += 1) {
//     console.log(pies[i]);
// }

// pies.forEach(function(element, index, array){
//     console.log(element);
//     console.log(index);
//     console.log(array);
//     console.log('==================');
// });

// pies.forEach(function(pie){
//     console.log(pie);
// });

// pies.forEach(function(pie){
//     console.log(pie);
// });

// defining all three parameters
// pies.forEach(function(element, index, array){
//     console.log("Element " + element + " is at index " + index);
//     console.log(pies);
//     console.log(array);
// });

// with different parameter names
// pies.forEach(function(pie, index, array){
//     console.log("Element " + pie + " is at index " + index);
//     console.log(pies);
//     console.log(array);
// });


// with only one parameter

// pies.forEach(function(element){
//     console.log("Element " + element);
// });
//
//
// console.log("----------------");


// callback function syntax

// let pies = ["apple", "cherry", "key lime", "huckleberry"];

// function logElements(element) {
//     console.log("Element " + element);
// }

// pies.forEach(logElements);
//
// function alertElements(element) {
//     alert(element);
// }
//
// pies.forEach(alertElements);


// ============================= !! MINI-EXERCISE 2 !!

/*
    1. Loop through your classmates array with a for loop.
    2. Loop through your classmates array with a forEach loop.
 */

// ============================= ARRAYS AND FUNCTIONS EXAMPLES

// !! Write a function, logNums, that takes in an array and logs each number in the array !!
// !! Write a function, returnLongString, that takes in an array of strings and returns all strings concatenated together !!
// !! Write a function, returnArrSum, that takes in an array of values and returns the sum of all number elements !!

