//conditional statements homework.

//q1

// var hero = "batman"

// console.log(hero.toLocaleLowerCase())

// if (hero.toLocaleLowerCase() === "superman" || hero.toLocaleLowerCase() === "batman" || hero.toLocaleLowerCase() === "flash"){
//     console.log("DC character")
// }else{
//     console.log("Marvel Character")
// }

//

var phone = "iphone"

if (phone.toLowerCase() === "iphone" || phone.toLowerCase() === "iphone 14"){
    console.log("Apple Product")
}else{
    console.log("Android Product")
}

//q2

var age = -1

if(age<=0){
    errorMessage()
}else if(age>=3 && age<11){
    console.log("Primary School")
}else if (age>=11 && age<=16){
    console.log("Secondary School")
}else if (age>16 && age<=18){
    console.log("College")
}else{
    console.log("Optional Education")
}

//q3 if its less than 5 add items to make it = 5 

var array = [1,2,3]

if (array.length<5){
    var number = 5-array.length
    if (number === 2){
        array.push("item")
        array.push("item")
        console.log(array)
    }
}else{
    console.log("Successful")
}

//q1

var name = 2

if (name.length<2 || name.length>20){
    console.log("Name does meet the requirement")
}else if (typeof name != "string"){
    errorMessage()
}else{
    console.log("Successful")
}

var number1 = 250
var number2 = 100
var operation = "this"

switch (operation.toLowerCase()){
    case "multiplication":
        console.log(number1*number2)
        break;
    case "division":
        console.log(number1/number2)
        break;
    case "addition":
        console.log(number1+number2)
        break;
    case "subtraction":
        console.log(number1-number2)
        break;
    default:
        errorMessage()
        break;
}

function errorMessage(){
    console.log("Error Message from function")
}