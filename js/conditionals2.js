let luckyNumber = Math.floor(Math.random() * 6);
console.log(luckyNumber)
let randomNumber = Math.floor(Math.random(1) * 100);
console.log(randomNumber)

function calculateTotal(luckyNumber, randomNumber){
return discountPrice = luckyNumber * randomNumber
    console.log(discountPrice)
}

function MULTIPLY(price, shipping) {
    //Return the sum
    return price*shipping;
}

//Call MULTIPLY to multiply the two numbers
var product=MULTIPLY(number1, number2);

if (luckyNumber == 0){
    alert("Sorry no discount")
    alert(calculateTotal())
} else if ( luckyNumber == "1"){
    alert("Congrats you get a %10 discount")
    alert(calculateTotal())
} else if (luckyNumber == "2"){
    alert("Congrats you get a %25 discount")
    alert(calculateTotal())
} else if (luckyNumber == "3"){
    alert("Congrats you get a %35 discount")
    alert(calculateTotal())
} else if (luckyNumber == "4"){
    alert("Congrats you get a %50 discount")
    alert(calculateTotal())
} else if (luckyNumber == "5"){
    alert("Congrats you get a %100 discount... aka FREE")
    alert(calculateTotal())
}
