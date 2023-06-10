import React from 'react'

function Movies(props) {
  return (
    <div className='card'>
        { props.img ? <img src={props.img} alt={props.alt}/> : <img src='https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg' alt='alt'/>}
        { props.title ? <h3>{props.title}</h3> : <h3>Uknown</h3>}
        { props.director ? <h4>{props.director}</h4> : <h4>Unkown</h4>}
        { props.year ?<p>{props.year}</p> : <p>Uknown</p>}
    </div>
  )
}

export default Movies