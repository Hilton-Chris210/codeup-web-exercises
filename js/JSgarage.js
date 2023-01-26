// =========================================Basic=========================================
// =========================================Loops=========================================
// =========================================Objects=========================================
// =========================================Arrays=========================================
// =========================================strings=========================================
            //     takes a dtring input and returns the last 2 characters
// function returnLastTwo(input){
//         return input.substring((input.length - 2), input.length)
// }
//
//             // takes in 2 inputs and returns the input string reversed to the input length specified
//     function returnReverse(i1,i2){
//         let reversed = i1.split("").reverse().join("");
//         return reversed.substring(0,i2)
// }
// =========================================numbers=========================================

//code wars
//   let array = ['Tim', 'tom', 'frank', 'steve' ];
//
//   function likes(names){
//       if(names.length === 0){
//           return `no one likes this yet`;
//       } else if(names.length === 1){
//           return `${names[0]} likes this` ;
//       }else if(names.length === 2){
//           return `${names[0]} & ${names[1]} likes this`;
//       }else if(names.length === 3) {
//           return `${names[0]} , ${names[1]} & ${names[2]} likes this`;
//       }else if(names.length === 4){
//               return `${names[0]} , ${names[1]} & ${names.length -2} other people likes this`;
//   }}
//
// likes(array);

// let numbers = [9,8,7,6,4,5,3,2,1,0]
//         function creatPhoneNumber(input){
//     return `(${input[0]}${input[1]}${input[2]}) ${input[3]}${input[4]}${input[5]}-${input[6]}${input[7]}${input[8]}${input[9]}`
//         }
//
//         console.log(creatPhoneNumber(numbers))
//
// let array = [1,2,3,4]
//         const initialValue = 0;
//         const sumWithInitial = array.reduce(
//             (accumulator, currentValue) => accumulator + currentValue,
//             initialValue
//         );
//
//         console.log(sumWithInitial)
//
//         function oddOrEven(array){
//             if(array === [0]){
//                 return 'even'
//             }else if(sumWithInitial % 2 === 0){
//                 return 'even'
//             }else{
//                 return 'odd'
//             }
//         }

//         let array1=[10,2,3,4]
//         function smallestNumber(input) {
//                 let smallNum = Math.min.apply(null,input)
//
//             }
// smallestNumber(array1)
//
//
//         // console.log(Math.min.apply(null,array1))
//


// const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
// }
//
// console.log(GetSum(10,1))
//
// function shortcut (input) {
//     return input.replace(/[aeiou]/gi,'');
// }
// console.log(shortcut("straeiouAIEOUng"))

// function getMiddle(input) {
//     let size = input.length
//     let oddIndex = Math.trunc(size/2)
//       return input.slice(oddIndex,(oddIndex+1))
// }
//
//   console.log(getMiddle("stron"))
//
//   function getMiddle(input) {
//       let size = input.length
//       let evenIndex = Math.trunc(size/2)
//       return input.slice((evenIndex-1),(evenIndex+1))
//   }
//
//   console.log(getMiddle("strong"))
//
//   function getMiddle(input){
//       if(input.length % 2 === 0){
//           let size = input.length
//                 let evenIndex = Math.trunc(size/2)
//                 return input.slice((evenIndex-1),(evenIndex+1))
//       }else{
//           let size = input.length
//               let oddIndex = Math.trunc(size/2)
//                 return input.slice(oddIndex,(oddIndex+1))
//       }
//   }

``//write a function that takes in an array of numbers and returns the sum of that array
// function sumArray(array){
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += array[i]
//     }
//     return sum
// }
// console.log(sumArray([1,2,3,4,5]))

