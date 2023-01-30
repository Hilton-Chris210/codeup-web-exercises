const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//todo Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
//
// function atLeastThree (obj){
//     if(obj.languages.length >= 3)
//         return true
// }
//
// let arrayByLang = users.filter(atLeastThree);
//
// console.log(arrayByLang)

const threeOrMore = users.filter(u =>u.languages.length >= 3);
console.log(threeOrMore)


// todo Use .map to create an array of strings where each element is a user's email address

// function getEmail (obj) {
//     return obj.email
// }
//
// let emailArray = users.map(getEmail);
//
// console.log(emailArray);

const emails = users.map(u => u.email);
console.log(emails)

//todo Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

// function getTotalExperience (total, obj) {
//     return total + obj.yearsOfExperience
// }
//
// let totalExperience = users.reduce(getTotalExperience, 0);
// let numOfUsers = users.length
// let avgExp = totalExperience/numOfUsers
// console.log(totalExperience)
// console.log(avgExp)

const totalExp = users.reduce((totalYears, user)=>{
    totalYears += user.yearsOfExperience;
}, 0);

console.log(totalExp)

//todo Use .reduce to get the longest email from the list of users.

// function getLongestEmail (longest, obj) {
//     if (obj.email.length > longest.length)
//         return obj.email
//     else
//         return longest
// }
//
// let longestEmail = users.reduce(getLongestEmail, "");

const longestEmail = users.reduce((longEmail, user)=>{
    if(user.email.length > longEmail.length){
        longEmail = user.email;
    }
    return longEmail
},'');

console.log(longestEmail)

//todo Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// function getNames (names, obj) {
//     return names + obj.name + ", "
// }
//
// let text = `your instructor names are `
// let instructorNames = users.reduce(getNames, text);
// let period = "."

const userNames = users.reduce((str, user)=>{
    str += user.name + ', '
    return str
}, 'your instructors are: ').slice(0,-2)+ '.';

console.log(userNames)


