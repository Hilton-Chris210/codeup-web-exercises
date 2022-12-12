(function() {
    "use strict";
// in classs stuff
//     Mini Exercise 1
//     Create a few beverage objects and assign values to each object for the following properties:
//         - brandName
//         - type
//         - volumeInLiters
//         - priceInCents
//         - expirationDate
//         - datesOfPreviousSips (use an array of strings)
//     - isOpen
//     Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.

// let beverages = {
//     brandName: 'Dr. Pepper',
//     Type:"Soda",
//     volumeInLiters:1.5,
//     priceInCents:1.99,
//     expirationDate:28/11/1988,
//     datesOfPreviousSips:["29/11/1988", "30/11/1988"], //(use an array of strings)
//     isOpen: true
// }
// beverages.bottlecolor = "clear"
//     console.log(beverages)
//
//
//
//
// }

    //mini ex 2

//     const user = [
//         {
//             givenName: "Sam",
//             age: 21
//         },
//         {
//             givenName: "Kathy",
//             age: 34
//         },
//         {
//             givenName: "Karen",
//             age: 43
//         }
//     ];
//
//     console.log(user[0,1,2].givenName)
//     console.log(`${(user[0].givenName)} ${(user[1].givenName)} ${(user[2].givenName)}`)
//     // user[0].givenName = "John Doe"
//     console.log(user)
//
// user.forEach(function (input){
//     input.age += 1
// });
//     user.forEach(function (input){
//         input.givenName = "John Doe"
//     ;})


    // 0. Log each given name
    // 1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"
    // 2. Change the names of all users to "John Doe"
    // 3. Increase the current age of all users by 1
    //
    // Can you accomplish each step using iteration?

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */


    let person = {
    firstname: "Chris",
    lastname: "Hilton",
    };
    console.log(person.lastname)
    console.log(person.firstname)

    let person1 = {
        firstname: "Chris",
        lastname: "Hilton",
    };
    console.log(person.lastname)
    console.log(person.firstname)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function (){
        return `hello from ${this.firstname} ${this.lastname} !`
    }
    console.log(person.sayHello())
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // if shopper spends > 200 apply 12% doiscont log final amount
    shoppers.forEach(function(shopper){
        if(shopper.amount > 200){
            let savings = parseFloat(shopper.amount)* .12;
            let total = parseFloat(shopper.amount)- (savings);
            console.log( `${shopper.name} your total before discount is ${shopper.amount} your discount is ${savings} and your new total is ${total.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`)
        } else{
            console.log(`${shopper.name} you did not spend enough for a discount your total is ${shopper.amount}`)
        }
    })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "Game of Trones",
            author: {
                firstname:"George",
                lastname:"Martin",
                },
        },
        {
            title: "Harry Potter",
            author: {
                firstname:"JK",
                lastname:"Rolling",
            },
        },
        {
            title: "Foundation",
            author: {
                firstname:"Isacc",
                lastname:"Martin",
            },
        },
        {
            title: "Kujo",
            author: {
                firstname:"Steven",
                lastname:"King",
            },
        },
        {
            title: "Jurrasic Park",
            author: {
                firstname:"micheal",
                lastname:"Chrichton",
            },
        },
    ]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(book, index){
        console.log(` Book # ${index + 1}
        Title: ${book.title} 
        Author: ${book.author.firstname} ${book.author.lastname}`)
        })
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
function createBook(title, author){
   let authorArray = author.split(' ');
    let bookObject = {
       title: title,
       author: {
           firstname: authorArray[0],
           lastname: authorArray[1],
       },
   };
   return bookObject;
    }

    console.log(createBook('boss baby', "chris hilton" ))
})();