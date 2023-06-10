// import data from '../components/data'
import './App.css'
import Movies from './Movies'
// import Books from './Books'
// import Maincard from './maincard'
import array from './data'

function App() {


    // const booksList = data.map(x => {
    //     return (
    //         <Books 
    //             img = {x.img}
    //             title = {x.title}
    //             author = {x.author}
    //             pages = {x.pages}
    //             year = {x.year}
    //         />
    //     )
    // })

    const moviesList = array.map(pos => {
        return (
            <Movies
                img = {pos.img}
                title = {pos.title}
                director = {pos.director}
                year = {pos.year} 
            />
        )
    })

  return (
    <div className='flex'>
        {/* {booksList} */}
        {moviesList}
    </div>
  )
}

export default App