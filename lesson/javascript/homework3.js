//write a function that console logs “hello world”

function helloMessage(message){
    console.log("hello world")
}

helloMessage("Afternoon Abdulkadir");

//write a function that combines multiple arrays together as 1 big array (you can use the .concat method for this )

function combineArray(array1,array2){
    console.log(array1.concat(array2))
}

var clothes = ["jeans", "socks"]
var food = ["milk", "bread"]

combineArray(food,clothes)

//write a function that check if the number is an odd or even number (%)

function oddOrEven(number){
    

    if (number%2 === 0){
        console.log("Number is even")
    }else{
        console.log("Number is odd")
    }
}

oddOrEven(16)

/*write a function that reverses the order of an array e.g 54326 = 62345 ( this uses several different methods to obtain search them and try figure out the answer. 
    First you need to use split method to make the string into an array then reverse method to reverse 
    the order of the array followed by join to join the array into 1 string resources found above)*/

    // split
    // 54321 => [5,4,3,2,1]
    // "the time" => ["the", "time"] 

    // reverse
    // [1,2,3] => [3,2,1]
    // ["the", "time"] => ["time", "the"]

    // join
    // ["time", "the"] => "time the"
    // [3,2,1] => 321


function reverse(param){

    const split = param.toString().split('')

    console.log( split)

    const reverse = param.reverse()

    console.log(reverse)

    const join = reverse.join('')

    return join
    

}

reverse(54321)

/*write a function to check if a string is a palindrome. 
(palindrome is if the word spells the same opposite, e.g madam is true as its madam backwards, sight is false because it is this backwards.*/

function checkPalindrome(string){

    const reversedWord = reverse(string)
    console.log(reversedWord)

    if (string === reversedWord){
        console.log(`${string} is a palindrome`)
    }else{
        console.log(`${string} is not a palindrome`)
    }

}

checkPalindrome("eye")