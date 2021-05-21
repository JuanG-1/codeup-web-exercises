///my results, need some work obviously

function lowerCase(input) {
    return typeof input === "string";
} ///// somehow .toLowerCase is to be used


function subtract(num1, num2) {
    return typeof num1 - num2 === false
}


function multiplyBy2(input){
    return typeof input *2 === true;
}

function getLowestNumber(arg1, arg2, arg3){
    return typeof Math.ceil(getLowestNumber(arg1,arg2, arg3));
}

function isEvenlyDivisible(input1, input2){
    return typeof input1 / input2 === 0;
}

function inBetween(num1, num2, num3){
    if(num1 <= num3){
        return true
    }else{
        return false
    }
}


function replace(input1,input2, input3){
    return typeof replace.shift != "string";
}

function addStringLengths(input1, input2){
    return typeof addStringLengths.length === "string";
}

function convertHourToSec(hours){
    return hours = 60 * convertHourToSec();
}

function calculateChange(totalPaid, totalCost){

