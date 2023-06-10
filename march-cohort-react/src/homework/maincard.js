import './App.css'
import Social from './Social'

function Maincard(props) {

    // statement ? true : false

  return (
    <div className='card'>
        { props.img ? <img src={props.img} alt={props.alt}/> : <img src='https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg' alt='alt'/>}
        { props.name ? <h3>{props.name}</h3> : <h3>Unkown</h3>}
        <h5>{props.position}</h5>
        <p>{props.description}</p>
        <Social />
    </div>
  )
}

export default Maincard