const body = document.body

body.style.backgroundColor = 'pink'

const button = document.createElement("button")
button.innerText = "Click Me"

body.append(button)

function changeColour(){
    body.style.backgroundColor = 'red';
    console.log("Hello")
}

button.addEventListener("click", changeColour)


