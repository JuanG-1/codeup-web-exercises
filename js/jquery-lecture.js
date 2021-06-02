"use strict";

//jquery selectors
//
// $("h1"); //changing by tag name
//
// $("#change-text"); //id name changes
//
// $(".lead"); // by class names
//
//
// //how to hide elements
// $("p").hide();
//
// ///hide a class by id
// $("#change-text").hide();
//
// //hiding by class
// $(".purple").hide();
//
// //show class once again
// $(".purple").show();


//@channel TODO: Using jQuery ... 1. hide the paragraph that is in all caps
// 2.hide all the spans 3. show all the elements that have a ‘show-me’ class.
// refresh your page between every task. d

// $("#all-caps").hide();
//
// $("span").hide()
//
// $(".show-me").show();

// //removing and adding classes adding css
// $("#all-caps").addClass("border")
//
// $("#all-caps").removeClass("border").css("color", "blue", )
//


//window.onload//
//javascript

// window.onload = function(){
//     console.log(new Date());
//     console.log("window is done loading");
// }
//
// //document.ready
// //jquery
//
// $(document).ready(function(){
//     console.log(new Date());
//     console.log("hey the DOM is finsihed loading")
// })
//

// TODO: add 3 images to your HTML page. give the element a pink background using jQuery.
//     give the element an orange background using jQuery.  Once the window has finished loading,
//     hide the div with a pink background color.
//     Once the DOM has finished loading hide the div with the orange background color.

$("#pink").css("background-color","pink")

// window.onload = function(){
//     $("#pink").hide()
//     console.log("pink is gone");
//
//    }

$(document).ready(function(){
    $("#pink").show();


})


//how to select multiple selectors

$("p, div").css({
    "border":"3px, solid, orange"
})

 $("#blue, .pink").css("font-family", "arial");

///how to use a variable
let firstPar = $("#blue");

firstPar.css("color", "pink")


//the following selects everything in the document
// $("div *").hide();

$("ul *").css("color", "red");




