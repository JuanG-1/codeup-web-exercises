//JS promise

//async vs sync
//async everything happens at once
//sync -sequentially

//three states of a promise
//pending
//resolved (successfully)
//rejected (handle failed request)


//fetch

//basic fetch syntax

// fetch("https://jsonplaceholder.typicode.com/")
// .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         $("div").append(`<h5>${data.title}</h5>`);
//     })
//     .catch(err => console.log(err));
//
//
// // .then(data => {
// //     console.log(data)
// //     $("div").append(`<p>${data.title}</p>`);
// // })
// //
// // console.log("below my fetch request");

///// TODO: using fetch(), make a simple GET request to this api: “https://dog.ceo/api/breeds/image/random”
// and append this image to the image element with an id of “random-dog-image”
fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(data => {
    return response.json()
})
.then(data => {
    console.log(data);
    console.log(data.message);
    $("#random-dog-image").attr("src", data.message);
})

 .catch(error => console.log(error));