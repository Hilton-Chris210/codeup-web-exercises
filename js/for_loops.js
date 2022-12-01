
showMultiplicationTable(7)
function showMultiplicationTable(input){
    for (i = 1 ; i < 11; i++){
        console.log(input * i)
    }
}

let randomNumber = Math.floor(Math.random() * 200)+20;

function isEvenOdd(input){
    if (input % 2 === 0){
        console.log(randomNumber + " Is Even")
    } else {
        console.log(randomNumber + " Is Odd")
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(i)
    randomNumber = Math.floor(Math.random() * 200)+20;
    isEvenOdd(randomNumber)}

for (let i = 1; i <= 9; i++) {
    let text = i.toString()
    let result = text.repeat(i);
    console.log(result)}
