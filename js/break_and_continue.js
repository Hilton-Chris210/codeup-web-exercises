
// 3. Use a loop and the continue statement to output all the
// odd numbers between 1 and 50, except for the number the
// user entered.

while(true){
    let userNum = prompt("Enter an odd number between 1 and 50");
    userNum = parseFloat(userNum);
    if (userNum % 2 === 1 && userNum <= 50 && userNum >= 1) {
        for (let i = 1; i <= 50; i+=2) {
            if (i === userNum) {
                console.log(`Yikes! Skipping number ${i}`);
                continue;
            }
            console.log(`Here is an odd number: ${i}`)
        }
        break;
    }
}