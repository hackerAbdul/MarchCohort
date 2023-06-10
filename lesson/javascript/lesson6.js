function firstSentence(){
    console.log("Welcome to todays class");
}

// firstSentence();

function errorMessage(){
    console.log("Error")
}


var name = "abdulkadir"

function checkString(name){
    if (typeof name === "string"){
        console.log("passes the string conditional")
        checkLength(name)
    }else{
        errorMessage()
    }
}

function checkLength(param){
    if (param.length >= 2){
        console.log("Passes validation")
    }else{
        errorMessage()
        console.log("from checkLength")
    }
}

checkString("23");


function myName(){
    var name = "John"
    console.log(name)
}

console.log("Hi my name is " + myName())

//I want a function that generates a random number every time its called using the math.random folder

function randomNumber(param){
    let number = Math.floor(Math.random()*param)
    return number
}
console.log(`Random number is ${randomNumber(100000)}`)



//check number if its odd and if its even

function checkNumber(param){
    if(typeof param === "number"){
        if(param % 2 === 0){
            console.log("number is even")
        }else{
            console.log("number is odd")
        }
    }
}

checkNumber(3)

function whatever(param1,param2){

}