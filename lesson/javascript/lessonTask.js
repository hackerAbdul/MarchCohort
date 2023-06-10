const body = document.body;
const button = document.getElementById('btn');
const cityBtn = document.getElementById('city')
const list = document.querySelector('ul')

cityBtn.addEventListener("click", addToList)

var array = []

function addToList(){
    var item = document.createElement('li')
    item.innerText = prompt("What City would you like to add list ?")
    console.log(item.innerText)
    
    
    for (let i=0; i<list.children.length; i++){
        if (list.children[i].innerText.toLowerCase() === item.innerText.toLowerCase()){
            console.log(`${item.innerText} already in the list`)
            return false
        }
    }

    list.append(item)
    
}
 

button.addEventListener("click", function(){
    body.classList.toggle("nightMode")
    button.innerText = 'Light Mode'
    console.log("hello")

    if(body.classList.contains("nightMode")){
        button.innerText = "Light Mode"
    }else{
        button.innerText = "Dark Mode"
    }
})


const nameEl = document.getElementById('name')
const emailEl = document.getElementById('email')
const form = document.querySelector('form')


function checkName(){
    let valid = false
    const regex = regexName(nameEl.value)

    if (nameEl.value && regex){
        console.log(nameEl.value)
        valid = true
    }
    return valid
}

function regexName(name){
    const re = /^[a-zA-Z]+$/;
    return re.test(name)
}

function checkEmail(){
    let valid = false 
    if (emailEl.value){
        console.log(emailEl.value)
        valid = true
    }
    return valid
}

form.addEventListener('submit', function(e){

    // e.preventDefault()

    let validName = checkName()
    console.log(`name is ${validName}`)
    let validEmail = checkEmail()
    console.log(`email is ${validEmail}`)

    let formIsValid = validName && validEmail
    console.log(`so that means form is ${formIsValid}`)

    if (formIsValid){
        alert("form submitted successfully")
    }else{
        e.preventDefault();
        alert("form incorrect")
    }
})