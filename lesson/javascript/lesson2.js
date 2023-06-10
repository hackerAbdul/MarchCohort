//syntaxes

// console.log("welcome this is lesson 2")


//variableType variableName = variableAssignment

var name;
let number = 1;
const age = 0;

//camelCase System

var myNameIs = "Abdulkadir"

// console.log(`Inside the variable number is: ${number}`)

// number = 25
// console.log(`Inside the variable number is: ${number}`)

//DataTypes
// console.log(typeof list)

//boolean datatype
true
false


//Arrays
//length of items is equal to the total number of items in a list
//position of item is different to length and to print off individual item you have to start from 0

var shoppingList = [123,4,24,"last item"]

console.log(shoppingList)
console.log(`the total number of items in the list is ${shoppingList.length}`)
console.log(shoppingList[shoppingList.length-1])

//add items into the list
shoppingList.push("new item")
shoppingList.push(24)
shoppingList.push("abdulkadir")
shoppingList.push(true)
shoppingList.push(false)
console.log(shoppingList)
console.log(shoppingList[shoppingList.length-1])


//delete last item from the list
// shoppingList.pop()
// shoppingList.pop()
// shoppingList.pop()
// shoppingList.pop()
// shoppingList.pop()
// shoppingList.pop()
// console.log(shoppingList)

//modify items in the list
console.log(shoppingList)
shoppingList[0] = "abdulkadir"
shoppingList[1] = "abdulkadir"
shoppingList[2] = "abdulkadir"
console.log(shoppingList)