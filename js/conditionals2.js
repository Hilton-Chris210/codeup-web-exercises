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


function calculateTotal(luckyNumber, randomNumber){
return luckyNumber*randomNumber;
    }
let totalD = calculateTotal(luckyNumber, randomNumber);
console.log(totalD)

if (luckyNumber === 0){
    alert("Sorry no discount")
    zeroDiscount

} else if ( luckyNumber === "1"){
    alert("Congrats you get a %10 discount")
    return oneDiscount

} else if (luckyNumber === "2"){
    alert("Congrats you get a %25 discount")
    return twoDiscount

} else if (luckyNumber === "3"){
    alert("Congrats you get a %35 discount")
    return threeDiscount

} else if (luckyNumber === "4"){
    alert("Congrats you get a %50 discount")
    return fourDiscount

} else if (luckyNumber === "5"){
    alert("Congrats you get a %100 discount... aka FREE")
    return fiveDiscount

}
