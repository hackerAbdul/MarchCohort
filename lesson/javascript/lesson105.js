const body = document.body;
const button = document.getElementById('btn');
const colourBtn = document.getElementById('colour')
const list = document.querySelector('ul')

colourBtn.addEventListener("click", addToList)

var array = []

function addToList(){
    var item = document.createElement('li')
    item.innerText = prompt("What colour would you like to add list ?")
    if (item.innerText.trim()){
        list.append(item)
    }
    
    for (let i=0; i<list.children.length; i++){
        console.log(list)
        array.push(list.children[i].innerText)
    }
    
}
 

button.addEventListener("click", function(){
    if (array.length<1){
        console.log("empty array")
        body.style.backgroundColor = '#fcba03'
    }else{
        var randomiser = Math.floor(Math.random()*array.length)
        let newColour = array[randomiser]
        body.style.backgroundColor = newColour
    }
})

const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.querySelector('form')

name.addEventListener('keyup', function(){
    console.log(name.value)
})

function checkName(){
    let bool = false
    if (name.value){
        console.log(name.value)
        bool = true
    }
    return bool
}


function checkEmail(){
    let bool = false
    if (email.value){
        console.log(email.value)
        bool = true
    }
    return bool
}

form.addEventListener('submit', function(){
    let isEmailValid = checkEmail(),
        isNameValid = checkName()

    let formValid = isEmailValid && isNameValid

    if(formValid){
        alert("form is valid")
    }
})