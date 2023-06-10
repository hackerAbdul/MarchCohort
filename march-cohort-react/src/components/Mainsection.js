import Socials from "./Socials"

function Main(props){
    return (
        <div className="Card">
            {props.img ? <img src={props.img} alt={props.alternative} /> : <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg" alt="bear" />}
            <h3>{props.name}</h3>
            <h5>{props.job}</h5>
            <p>{props.jobDescription}</p>
            <Socials />
        </div>
    )
}

export default Main