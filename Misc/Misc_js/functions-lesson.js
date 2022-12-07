// let message = myFunction("Chris");
// console.log(message);
fight("Billy", "Bob");

function myFunction(name){
    return 'Thank you, ' + name + 'You have ran my function';
}

function fight(person1, person2){
    console.log(person1 + " punched " + person2 + " right in the kisser.")
}



function isEven(num){
    // GET THE PIECES OF THE PUZZLE
    // Put the pices of the puzzle inrto variables
    let number = num
    let answer = (number % 2 == 0)
    // finaly return the answer
    return (answer);
}