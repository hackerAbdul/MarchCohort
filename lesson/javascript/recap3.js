console.log("Hello World")


//DOM Manipulation
const body = document.body

const head = document.head

const title = document.createElement("title")
title.innerText = "Recap session"

head.append(title)

const newHeading = document.querySelector("h1")
newHeading.innerText = "20/05/2023"

body.addEventListener("click", function(){
    // body.style.backgroundColor = "black"
    newHeading.innerText = "You have clicked an event"
    title.innerText = "Event Clicked"
})

const button = document.getElementById("btn")
button.addEventListener("click", buttonFunction)

function buttonFunction(){
    // newHeading.classList.toggle("darkMode")
    body.classList.toggle("vibrant")
    button.innerText = "Button Pressed"
}

const img = document.querySelector('img')

