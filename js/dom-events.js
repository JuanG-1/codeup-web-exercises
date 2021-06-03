//
//
//
//
addButtonEvent()
function addButtonEvent() {
    document.getElementById("submitBtn")
        .addEventListener("click", addPost)
}


function addPost() {
    var container = document.getElementById("blog-container")
    var newPost = document.createElement("p")
    var blogInput = document.getElementById("user-input")
    container.appendChild(newPost)
    newPost.innerText = blogInput.value
}


//
// addSecondButton()
// function addSecondButton(){
//     document.getElementById("submitBtn2").addEventListener("click", addSecondPost)
//
// }
//
// function addSecondPost(){
//
//     var container2 = document.getElementById("blog-container2")
//     var newPost2 = document.createElement("p")
//     var blogInput2 = document.getElementById("user-input2")
//     container2.appendChild(newPost2)
//     newPost2.innerText = blogInput2.value
// }
//
//
//
//
//
//
//
//
//
// function addPost() {
//     document.getElementById("blog-container").appendChild(BlogContent());
//
// }
//
// function BlogContent() {
//     let p = document.createElement("p");
// p.textContent = "random text"
//     document.getElementById("userInput").innerHTML
//     return p;
// }
//


//
//
// function countVowels(x) {
//     var count = 0;
//     for (var i = 0; i < "hello".length; i++) {
//         var letter = "hello"[i];
//         if (isVowel(letter)) {
//             count++;
//         }
//     }
//     return countVowels
// }
//
// console.log(countVowels())