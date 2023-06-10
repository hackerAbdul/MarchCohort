/* 
    LO:
        - validation/error handling
        - comparison variables (less than / greater than)
        - switch cases
        - nested conditional statements
*/


// var array1 = ["jeans", "socks"]
// var array2 = ["oranges", "apples"]

// if (array1.length > array2.length){
//     console.log("Array 1 has more items than array 2")
// }else if(array1.length === array2.length){
//     console.log("Array 2 has same amount of items as array 1")
//     var biggerArray = array1 + "," + array2
//     console.log(biggerArray)
// }else{
//     console.log("Array 2 has more items than array 1")
// }

// var myName = "abdulKADIR"

// console.log(myName)
// console.log(myName.toUpperCase())

// if (myName.toLowerCase() === "abdulkadir"){
//     console.log("Hello welcome back " + myName.toLowerCase())
// }else{
//     console.log("Sorry you are not allowed here")
// }

var number1 = 24
var number2 = 25



if (typeof number1 === "number" && typeof number2 === "number"){
    if (number1 > number2){
        console.log(number1-number2)
    }else{
        console.log(number1+number2)
    }
}else{
    console.log("both variables must be numbers")
}


//Write a Javascript program to get a number from the user and print whether it is positive or negative.

var number = "number"

if (typeof number === "number"){
    if (number > 0 ){
        console.log(`${number} is a positive number`)
    }else{
        console.log(`${number} is a negative number`)
    }
}else{
    console.log("sorry only allow numbers")
}

// switch cases

/* 
    if(){

    }else if(){

    }else if(){

    }else{

    }

*/

var day = "WedNESday"

switch (day.toLowerCase()){
    case "monday":
        console.log("Today is Monday")
        break;
    case "tuesday":
        console.log("Today is Tuesday")
        break;
    case "wednesday":
        console.log("Today is Wednesday")
        break;
    case "thursday":
        console.log("Today is Thursday")
        break;
    case "friday":
        console.log("Today is Friday")
        break;
    case "saturday":
        console.log("Today is Saturday")
        break;
    case "sunday":
        console.log("Today is Sunday")
        break;
    default:
        console.log("Not a day")
        break;
}

var list = [1,2,3,4,5,6,7,9,10,11]

switch(list.length){
    case 10:
        console.log(`list has 10 items inside`)
        console.log(list)
        break;
    default:
        console.log("list is empty")
        break;
}