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
//using filter
// let usersWithLanguages = users.filter(function(user){
//     return user.languages.length >= 3;
//
//     })
// console.log(usersWithLanguages);


//using map
// let emails = users.map (user => user.email);
//
// console.log(emails)


///reduce

// let averageYrs = users.reduce((accumulator  , currentVal) => {
//     return accumulator + currentVal.yearsOfExperience
// }, 0) / users.length
//
// console.log(averageYrs)


// let emails = users.map(user => user.email);
//
// console.log(emails)
//
// let longestEmail = emails.reduce((accumulator, currentValue) =>{
// return accumulator.length > currentValue.length
//     ? accumulator///if
//     : currentValue;///else
// }, "")
//
// console.log(longestEmail);

// let namesString = users.reduce((acc, curVal,index) => {
//     if(index === users.length - 1){
//         return acc +  curVal.name;
//     }
//     return acc + curVal.name + ", ";
// }, "Your instructors are: ");
//
// console.log(namesString)
//

// let uniqueLanguages = users.reduce((acc, user) =>{
//     let uniqueLang;
//     user.languages.reduce((acc, lang) => {
//         return (!acc.includes(lang)) => {
//         }
//     })
//     return uniqueLang
// }, [])


