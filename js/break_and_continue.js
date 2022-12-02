let newNum = prompt("Please enter an ODD NUMBER between 1-50")
    if (newNum === (isEvenOdd(newNum)=== "even")) {
        prompt("Please enter an ODD NUMBER between 1-50");
    } else if (newNum < 1) {
        prompt("Please enter an ODD NUMBER between 1-50");
    } else if (newNum > 50) {
        prompt("Please enter an ODD NUMBER between 1-50");
    }else {
        console.log('For loop to show the stuff');
        //     for (let i = 1; i <= 50; i++){
        //         let result =;
        //             console.log()
        //     }
        // }


        function isEvenOdd(input) {
            if (input % 2 === 0) {
                return "even"
            } else {
                return "odd"
            }
        }

        'use strict';

        for (let i = 1; i < 50; i++) {

            if (i % 2 === 0) {
                // numb is even
                // skip the rest of the loop and continue with the next iteration
                continue;
            }

            console.log('Here is a lovely odd number: ' + i);
        }
    }