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

    console.log(`${names.length} names.length`)

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0],names[1],names[2],names[3])
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */


    for (let i = 0; i < names.length; i += 1) {
        console.log(names[i]);
    }


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name) {
        console.log(name);
    });

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


    function firstItem(array){
        return array[0]
    }
    console.log(firstItem(names))

    function secondItem(array){
        return array[1]
    }
    console.log(secondItem(names))

    function lastItem(array){
    return array[array.length - 1]
    }
    console.log(lastItem(names))
})();

