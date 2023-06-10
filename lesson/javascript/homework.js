//lesson 1 h/w
//q1

// var firstWord = "hello"
// var secondWord = "world!"

// console.log(firstWord + " " + secondWord)

//q2
// var number = 12;
// var string = "my name is abdul"

//q3
// var name = "abdul"
// let age = 24
// var dob = 1998

// console.log(`Hi my name is ${name} and I am ${age} years old born in the year ${dob}!`)

//q4
// age = 25;
// console.log(age)

//q5
// console.log(typeof age)
// console.log(typeof name)





//-----------------------

//lesson 2 h/w
//q1

var longArray = ["carpet","sofa", "tables", "chairs", "tv", "apple", "oranges", "pineapple", "bread", "milk", "juice", "cheese", "yoghurt", "fish", "chicken"]
console.log(longArray.length)

//q2
longArray.pop()
console.log(longArray)

//q3
longArray.push("grapes")
console.log(longArray)
console.log(longArray.length)

//q4
console.log(longArray[0])
console.log(longArray[6])
console.log(longArray[longArray.length-1])

//q5
longArray[2] = "flour"
longArray[0] = "abdul"
longArray[1] = "eggs"

console.log(Math.ceil(longArray.length/2))

//math.floor(argument) makes 7.5 = 7
//math.ceil(argument) makes 7.5 = 8