//conditional statements

/*

if (){
    where the executable code goes
}else if(){
    where the executable code goes
}else{
    where the executable code goes
}

AND && - GATE
OR ||  - GATE

== loose ----- 1 == "1"
=== strict ---- 1 === "1"

*/

var name = "Abdulkadir"
var age = 25

// if(name === "abdulkadir"){
//     console.log(`Hi welcome back ${name} been a while`)
// }else if(name === "abdul"){
//     console.log(`Hi welcome back ${name} been a while THIS IS THE 2ND STATEMENT`)
// }else if(name === "Abdulkadir"){
//     console.log(`Hi welcome back ${name} been a while THIS IS THE 3RD STATEMENT`)
// }else{
//     console.log(`Sorry I do not recognise you ${name}`)
// }

if( (name === "abdulkadir" || name === "Abdulkadir" || name === "abdul") && age === 24 ){
    console.log(`Hi welcome back ${name} been a while`)
}else{
    console.log(`Sorry I do not recognise you ${name}`)
}