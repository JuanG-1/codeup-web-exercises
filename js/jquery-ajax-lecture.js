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
// $.ajax("https://jsonplaceholder.typicode.com/comments",{
//     type: "GET",
//
// }).done(function(data){
//     console.log(data)
//     }
// )

// $.ajax("https://jsonplaceholder.typicode.com/posts", {
//     type: "POST",
//     data: {
//         name: "Juan",
//         location: "Saint Tony"
//     }
// }).done(function(zero) {
//         console.log(zero)
//     }
// )

console.log($.ajax("https://dog.ceo/api/breeds/image/random Fetch!"),{
    type: "GET"
    });

console.log($.ajax("https://jsonplaceholder.typicode.com/posts"),{
    type: "POST"
    data:{

    }
    }
    )

///how to add a button
$("#click-me").click(function(){
    console.log($.ajax("https://jsonplaceholder.typicode.com/posts"),
        {
            type: "POST",
            data:{
                id: 2,
                body:"hello hello",
                title: "whatsupp"
            }
        })
    }
)

///succesful

$.ajax("https://jsonplaceholder.typicode.com/posts").done(function(data, status, jqXhr){
    console.log(status);
    console.log(data);
    console.log(jqXhr);

    alert("your request has been completed successfully")
})

$.ajax("https://jsonplaceholder.typicode.com/posts", {
    type: "POST",
    data: {
        title: "hello world",
        body: "our planet rocks"
    }
}).fail(function(jqHxr,status,error){
    console.log(jqHxr);
    console.log(status);
    console.log(error);

})

$.ajax("https://jsonplaceholder.typicode.com/posts").always(function(){
    alert("thank you for being here again today")
}).done(function(){
    alert("done method has been fired")
})


$.ajax("https://jsonplaceholder.typicode.com/posts").done(function(data){
    console.log(data)
    let allPosts = data;
    let dataId = allPosts[25].id;
    console.log(dataId);
    ///make a request to the comments section and look for only the comments that have and id
    $.ajax(`https://jsonplaceholder.typicode.com/comments?postId=${dataId}`).done(function(commentsData){
        console.log(commentsData)
    })

})











