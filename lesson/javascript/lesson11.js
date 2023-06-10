const body = document.body

const ul = document.querySelector('ul')
// console.log(ul.children[0].innerHTML)

var array = []

// console.log(array)

for (let i = 0; i<ul.children.length; i++){
    array.push(ul.children[i].innerHTML)
    // console.log(ul.children[i].innerHTML)
}

// console.log(array)

const changeColourBtn = document.getElementById('btn')

changeColourBtn.addEventListener("click", changeColour)

function changeColour(){
    var randomiser = Math.floor(Math.random()*array.length)
    body.style.backgroundColor = array[randomiser]
}


const btn = document.querySelector('button')

btn.addEventListener('click', function(){
    var item = prompt("What colour would you like to add to the list")
    if(item.trim()){
        const listItem = document.createElement('li')
        listItem.innerText = item.trim()
        ul.append(listItem)
    }
})