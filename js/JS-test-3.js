"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isNegative(num) {
    return num < 0;
}

function isTen(num) {
    return num === 10;
}

function double(num){
    return num * 2;
}

function remove9s(arr) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === 9) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}



function average(arr) {
    var sum = 0;
    for(var i=0;i < arr.length;i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

function countOdds(arr) {
    var count = 0;
    for(var i=0;i<arr.length;i++) {
        if(arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}




function averageSales(arr) {
    var person = 0;
    for(var i = 0; i < arr.length;i++) {
        person += arr[i].sales;
    }
    return person / arr.length;
}



const names = {
    "firstName": "Juan",
    "lastName": "Gonzalez",
}

function convertNameToObject(input) {
    return {
        firstName: input.split('')[0],
        lastName: input.split('')[1]
    }
}

function countVowels(str)
{
    var vowel_list = 'aeiouAEIOU';
    var count = 0;

    for(var x = 0; x < str.length ; x++)
    {
        if (vowel_list.indexOf(str[x]) !== -1)
        {
            count += 1;
        }

    }
    return count;
}

const information = {
    "word": "Hello",
    "numberOfLetters": 5,
    "numberOfVowels": 2,
}

function analyzeWord(input){
    return {
        word: input,
        numberOfLetters: input.length,
        numberOfVowels: countVowels(input)
    }

}

function capitalizeName(str)
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}



