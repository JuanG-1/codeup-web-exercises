///javascript object
// let animal = {
//     name: "frog",
//     color: "green",
// }
//
// console.log(animal.color)


//JSON
// response === {
//     "name": "frog",
//     "color": "green",
//     "favorite": "true"
// }

/// TODO: create a JSON object about your favorite hobby. make sure to include at least one of every data type that can
// //  be accepted as values
//
//  {
//     "name": "music",
//     "style": "afro-cuban jazz",
//     "insturment": "congas",
//     "favorite": "true"
// }
//

///requests
//syntax
// get request
// $.ajax()
// //url - location to go look for something / to go post something
//
// $.ajax("url", {
//     type: "POST",
//     data: {
//         title: "my trip to antartica"
//         article: "lorem pisum"
//     }
// })
/// POST REQUEST--ADDING.SENDING INFORMATION TO THE SERVER ADDING TO IT

// DELETE

//PUT


// TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.
// TODO: make a POST request to the '/posts' endpoint, make sure to include any data required for that post to be made successfully
//
// $.ajax("https://jsonplaceholder.typicode.com/",{
//     type: "GET",
//
// }).done(function(data){
//     console.log(data)
//     }
// )

$.ajax("https://jsonplaceholder.typicode.com/posts", {
    type: "POST",
    data: {
        name: "Juan",
        location: "Saint Tony"
    }
}).done(function(zero) {
        console.log(zero)
    }
)














