import './App.css';
import Main from './Mainsection'
import data from './data';

function App() {


    const cardData = data.map(x =>{
        return(
            <Main 
                img={x.img}
                name={x.author}
            />
        )
    })

  return (
    <div className='Card-Components'>
        <Main 
            img="https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Jesus_Profile_1100x693_0.jpg?itok=XGMDDMEF"
            alternative="G.Jesus"
            name="gabriel Jesus"
            job="Striker"
            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
        <Main 
            img='https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Trossard_1100x693.jpg?itok=xo-63Wnm'
            alternative="trossard"
            name="Leandro Trossard"
            job="Forward"
            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
        <Main 
            img="https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Saka_Profile_1100x693_0.jpg?itok=LvMDBAP2"
            alternative="Saka"
            name="Bukayo Saka"
            job="Right Winger"
            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
        <Main 
            img="https://www.arsenal.com/sites/default/files/styles/player_featured_image_1045x658/public/images/Martinelli_Profile_1100x693_0.jpg?itok=72tZRUfL"
            alternative="G.Martinelli"
            name="Gabriel Martinelli"
            job="Left Winger"
            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
    </div>
  )
}

// function mainsection (param1,param2,param3,param4,param5){}

// mainsection(param1,param2,param3,param4,param5)
export default App