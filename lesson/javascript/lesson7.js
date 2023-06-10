function greetingMesssage(){
    console.log("Hello world")
}

// greetingMesssage()


// for (let index=100; index>=0; index-=5){
//     console.log(index)
// }

// index=0
// index=1
// index=2
// index=3

// index++
// index=index+1

//loop that does a countdown starting from 10 reach 0 and console.logs each number counting down.

// const startPoint = "me"

// for (let startPoint = 10; startPoint>=0; startPoint=startPoint-1){
    
//     if (startPoint===0){
//         console.log("Blast Off")
//     }else{
//         console.log(startPoint)
//     }

// }

// i = 10

// while (i>=0){
//     if (i === 0){
//         console.log("Blast Off!")
//     }else{
//         console.log(i)
//     }
//     i--
// }

// var array = [1, 2, 3]

// for (let items=0; items<array.length; items++){
//     console.log(array[items])
// }

//find the mistakes in the code 
//print the teams in the list 1 by 1 
// var array = ["chelsea", "arsenal", "liverpool", "city", "united"]

// for (let items=0; items<array.length; items++){
//     console.log(array[items])
// }

//count up by 5 target goal should be 100
// let n = 0
// var array = ["chelsea", "arsenal", "liverpool", "city", "united"]
// while(n<array.length){
    
//     console.log(array[n]) // array[0]
//     n++; //===== n is now = 1 
// }

//count down by 1 each time
// for (let i=20; i>=1; i--){
//     console.log(i)
// }

//write an loop that iterates through an array printing the even positions only
// var array = ["chelsea", "arsenal", "liverpool", "city", "united"]

// for (let items=0; items<array.length; items+=2){
//     console.log(array[items])
// }

var array = ["chelsea", "arsenal", "liverpool", "city", "united","city"]

const target = "city"

for (let i=0; i<array.length; i++){
    if(array[i] === target){
        console.log(`${target} is in the array`)
    }
}


// var list = [1,2,3,4,5,6,7,8,9,11,123,1231,0,10000000]
// var previous = [list[0]]

// for (let i=0; i<list.length; i++){
//     if(list[i]>previous){
//         previous.pop()
//         previous.push(list[i])
//     }
// }

// console.log(previous)

// var list = [1,2,3,4,5,6,77,88,994,66,45,0]
// var previous = [list[0]]

// for(let i = 0; i<list.length; i++){
//     if(list[i]>previous){
//         previous.pop()
//         previous.push(list[i])
//         console.log(previous)
//     }
// }

const arr = [25, 42,5, 9, 1, 7];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);