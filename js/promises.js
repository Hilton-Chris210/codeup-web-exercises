// async function getUserEmail(){
//     try {
//         let response = await fetch('https://api.github.com/user/emails', {headers: {'Authorization': '${keys.github}'}})
//     } catch(error){
//
//     }
// }
let userName = "Hilton-Chris210"

// fetch(`https://api.github.com/users/${userName}/events`, {headers: {'authorization': `token ${keys.github}`}})
//     .then( response => {
//         response.json().then( users => {
//             console.log(response)

            // users.forEach( userObj  => {
            //     // do something with the username login
            //     if(userObj.type === "PushEvent"){
            //
            //         console.log(userObj)
            //
            //     }
            // });
    //     });
    // });

async function fetchGitJSON(userName) {
        try {
            const response = await fetch(`https://api.github.com/users/${userName}/events`, {headers: {'authorization': `token ${keys.github}`}});
            const data = await response.json();
            let events = data.filter(event => event.type === "PushEvent");
            return events[0].created_at;
        } catch (error) {
            console.error(error);
            // Expected output: ReferenceError: nonExistentFunction is not defined
            // (Note: the exact output may be browser-dependent)
        }
}
// The old horizontal method
// fetchGitJSON(userName).then((user) => {
//     console.log(user);
// });

//Main line code when the page runs
// The Es6 syntax that makes promises vertical
(async ()=>{
    let user = await fetchGitJSON(userName);
    console.log(user);
})();

