import './App.css'

function Books(props) {
  return (
    <div className='card'>
        { props.img ? <img src={props.img} alt={props.alt}/> : <img src='https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg' alt='alt'/>}
        { props.title ? <h3>{props.title}</h3> : <h3>Uknown</h3>}
        { props.author ? <h4>{props.author}</h4> : <h4>Unkown</h4>}
        { props.pages ? <p>{props.pages}</p> : <p>Uknown</p>}
        { props. year ?<p>{props.year}</p> : <p>Uknown</p>}
    </div>
  )
}

export default Books