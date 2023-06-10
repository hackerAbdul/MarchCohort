import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

function App() {

    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("Abdulkadir")


    function up(){
        setCounter(counter+1)
        //function setVariable(){
        //     [variable, setVariable]
        //     return variable+1
        // }
    }

    function down(){
        setCounter(counter-1)
        //function setVariable(){
        //     [variable, setVariable]
        //     return variable+1
        // }
    }

    function nameChange(event){
        setName(event.target.value)
    }

    // addEventListener('click',function)
    // onclick={function}

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={up}>+</button>
        <button onClick={down}>-</button>
        <input onChange={nameChange}></input>
        <h1>{name}</h1>
    </div>
  )
}

export default App