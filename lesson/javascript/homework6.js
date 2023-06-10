const body = document.body
const head = document.head

const pageTitle = document.createElement('title')
pageTitle.innerText = 'Doms Homework 1'

head.append(pageTitle)

const titlePage = document.getElementById('title')
titlePage.innerText = "Homework 1 is all about DOM Manipulation"

var date = new Date()
const h3 = document.querySelector('h3')
h3.innerText = `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()}`


const orderedList = document.createElement('ol')
const h5 = document.createElement('h5')
h5.innerText = 'Coding I am currently learning are;'

//list items
const item1 = document.createElement('li')
const item2 = document.createElement('li')
const item3 = document.createElement('li')

item1.innerText = 'HTML'
item2.innerText = 'CSS'
item3.innerText = 'JavaScript'

orderedList.append(h5)
orderedList.append(item1)
orderedList.append(item2)
orderedList.append(item3)


const btn = document.createElement('button')
btn.innerText = 'Click Me'


body.append(orderedList)
body.append(btn)


var arrayColours = []

//eventlisteners
btn.addEventListener("click", function(){

    var newColour = prompt("What colour would you like to add to the list")

    if (newColour.length>0){
        body.style.backgroundColor = newColour
    }

    const randomiser = Math.floor(Math.random()*arrayColours.length)
    console.log(arrayColours[randomiser])
    

    // for (let i=0; i<arrayColours.length; i++){
    //     (function (i){
    //         setTimeout(function(){
    //             console.log(i)
    //             body.style.backgroundColor = arrayColours[i]
    //         },3000*i)
    //     }(i))    
    // }
    
})

