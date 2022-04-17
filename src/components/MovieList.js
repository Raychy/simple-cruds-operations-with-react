import React,{useState} from 'react';
import Movie from './Movie';

function Movieslist(props) {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <section className='movie-list-section'>
         <button onClick={props.onAddMovie} className='add-btn' >Add New Movie</button>
         
         <div className='search-movie-row'>
         <input
         type='text'
         id='search'
         name="search"
         // value = {inputSearch}
         placeholder='search for movie name'
         onChange={(e)=>setInputSearch(e.target.value)}
         // onKeyDown={submitSearch}
       />
         </div>
         <div>

         </div>
   
      {
       props.movies.length !== 0 ?
          
        <table>
        <tr>
          {/* <th>S/N</th> */}
          <th>Movie Name</th>
          <th>Movie Rating</th>
          <th>Duration</th>
          <th>Action</th>
        </tr>
        <tbody>           {
             // eslint-disable-next-line array-callback-return
             props.movies.filter((movie) =>{
               if(inputSearch === ''){
                 return movie;
               }
               else if(movie.movieName.toLowerCase().includes(inputSearch.toLowerCase()) ){
                 return movie;
               }
             }).map((movie)=>(
               <Movie  
               movie={movie}
               showEditForm = {props.showUpdateMovieProps} 
               key={movie.id} 
               deleteMovieBtn={props.deleteMovieProps}
               updateMovieBtn={props.updateMovieProps}  />
               ))
           }</tbody>
      </table>
       
      
        :   <h1 style={{fontStyle:"italic"}} >No movies found!</h1>
        
      }
    
    </section>
  )
}

export default Movieslist;
