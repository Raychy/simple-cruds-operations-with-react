
import React, { useState, useEffect } from 'react'
import './App.css';
import Movieform from './components/MovieForm';
import Movieslist from './components/MovieList';
import { v4 as uuidv4 } from "uuid";
import UpdateMovieform from './components/UpdateMovie';

function App() {
  const [movies, setMovies] = useState(fetchMovies());
  const [singleMovie, setSingleMovie]= useState({})
  const [editing, setEditing] = useState(false)
  // const [searchResult, setSearchResult] = useState([])
  useEffect(()=>{
    const temp = JSON.stringify(movies)
    localStorage.setItem('movies', temp)
   
  },[movies])
//ADD MOVIES LOGIC
  const addMovie = (movieName, ratings, duration)=>{
    const newMovie = {
      id: uuidv4(),
      movieName: movieName,
      ratings:ratings,
      duration:duration
    }
    setMovies([...movies, newMovie]);

  };
  //DELETE MOVIES LOGIC
  const deleteMovie = id =>{
    setMovies([...movies.filter(movie =>{
      return movie.id !== id
    })]);
  };
  // UPDATE MOVIE RECORDS LOGIC
  const updateMovieFunction =(updatedMovieName, updatedRatings, updatedDuration, id) =>{
    setMovies(
      movies.map(movie =>{
        if(movie.id === id){
          movie.movieName = updatedMovieName
          movie.ratings = updatedRatings
          movie.duration = updatedDuration

        }
        return movie
      })
    );
    // setEditing(true)
  };
  //FETCH MOVIES LOGIC
  function fetchMovies() {  
    const temp = localStorage.getItem("movies");
    const savedMovies = JSON.parse(temp)
    return savedMovies || []
  }
  const toggleEdit = id => {
    setEditing(true);
    getSingleMovie(id);
    
    return id;
  }
  const getSingleMovie = (id) =>{
    movies.map(movie =>{
    
      if(movie.id === id){
        const multiMovies = JSON.stringify(movie)
        localStorage.setItem('singleMovie', multiMovies)
        const fetchSingleMovie = localStorage.getItem("singleMovie");
        const savedMovie = JSON.parse(fetchSingleMovie);
        setSingleMovie(savedMovie)
        // console.log(savedMovie.movieName);
      }
    
      return movie
    })
  }

  return (
    <div className="App">
      {
        editing!== true ? <Movieform addMovie={addMovie} /> : 
        <UpdateMovieform 
        updateMovieFunctionProps={updateMovieFunction} 
        singleMovie= {singleMovie}

        />
      }
       <Movieslist 
       onAddMovie = {() => setEditing(false)}  
       showUpdateMovieProps={toggleEdit}  
       movies={movies} 
       deleteMovieProps={deleteMovie} 
       updateMovieProps={updateMovieFunction}  
     
       />
    </div>
  );
}

export default App;
