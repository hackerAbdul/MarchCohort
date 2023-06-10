import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

    const defaultUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.REACT_APP_API_KEY}&units=metric`

    function getData(){
        axios.get(defaultUrl).then(
            (response) =>{
                setData(response.data)
                console.log(response.data)
            })
    }
    

    useEffect(() =>{
        getData()
    }, [])


    const [data, setData] = useState({getData})
    const [location, setLocation] = useState('')


    function change(event){
        setLocation(event.target.value)
    }

    function newLocation(event){
        if (event.key === "Enter" && location.trim()===""){
            axios.get(defaultUrl).then(
                (response) =>{
                    setData(response.data)
                    console.log(response.data)
            })
        }else if(event.key === "Enter" && location.toLowerCase()==="birmingham"){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},GB&appid=${process.env.REACT_APP_API_KEY}&units=metric`).then(
                (response) =>{
                    setData(response.data)
                    console.log(response.data)
            }).catch((err) =>{
                if(err.response.status === 404){
                    alert("Invalid City")
                    axios.get(defaultUrl).then(
                        (response) =>{
                            setData(response.data)
                            console.log(response.data)
                    })
                }
            })
            setLocation('')}else if(event.key === "Enter"){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`).then(
                (response) =>{
                    setData(response.data)
                    console.log(response.data)
            }).catch((err) =>{
                if(err.response.status === 404){
                    alert("Invalid City")
                    axios.get(defaultUrl).then(
                        (response) =>{
                            setData(response.data)
                            console.log(response.data)
                    })
                }
            })
            setLocation('')
        }
    }

  return (
    <div>
        <div>
            <input 
                type='text'
                placeholder='Enter Location'
                value={location}
                onChange={change}
                onKeyPress={newLocation}
            />
        </div>
        <div className='flex'>
            <h1>{data.name}</h1>
            <h1>{data.sys.country}</h1>
        </div>
        <h2>{Math.ceil(data.main.temp)}</h2>
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
    </div>
  )
}

export default App