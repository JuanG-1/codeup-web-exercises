//Make a function named trim(string)that removes empty spaces before and after the input, the returns that trimmed string

function trim(input){
    return input.replaceAll("", " ")
}

console.log(trim("string"))
function trim(input){
    return input.replaceAll("", " ")
}

// Write a function named cube that returns n * n * n
// Write a function named cube Root that returns the cube root of the input

function cube(num){
    return num * num * num
}

console.log(cube(3))

function cubeRoot(num){
    return Math.cbrt(num);
}

console.log(cubeRoot(27))