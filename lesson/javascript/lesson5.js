//functions 

/*function functionName(){
    goes your code
}*/

function errorMessage(){
    console.log("Error")
}


function addTwoNumbers(abdul,ahmed,b){
    console.log(abdul+ahmed)
    console.log(b)
}

function multiplyNumbers(number1,number2){
    console.log(number1*number2)
}

addTwoNumbers(24123412423142,564385729034750923475,234)
multiplyNumbers(52,10)

var abdul = "abdulkadir"
console.log(abdul)


// === 
// != "Not Equal to"


function checksHero(name){
    if (typeof name != "string"){
        errorMessage()
    }else if (name.toLowerCase() === "batman" || name.toLowerCase() === "superman" || name.toLowerCase() === "flash"){
        console.log("DC Character")
    }else if(name.toLowerCase() === "spiderman" ){
        console.log("Marvel Character")
    }else{
        errorMessage()
    }
}


checksHero("flash")

