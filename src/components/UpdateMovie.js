import React, { useState, useEffect } from 'react';


function UpdateMovieform(props) {


  const [movieName,setmovieName] = useState(''),
        [ratings, setRatings] = useState( ''),
        [duration, setduration] = useState('');
        // console.log(props.singleMovie.movieName);
  const handleMovieSubmit = e =>{ 
    e.preventDefault();
    props.updateMovieFunctionProps(movieName,ratings,duration, props.singleMovie.id);
    // console.log("props.id");
    // console.log(`  ${ props.singleMovie.id }   `);


  };
  useEffect(() => {
   setmovieName(props.singleMovie.movieName)
   setRatings(props.singleMovie.ratings)
   setduration(props.singleMovie.duration)
  

  }, [props.singleMovie.movieName, props.singleMovie.ratings,props.singleMovie.duration])
  
  // console.log(props.singleMovie);

  return (
    
     <>
     {/* {editing &&  */}
    <section className='movie-form-card '>
      <div className='pa-30'>
           {/* <p>{movieName} </p> */}
                <form onSubmit={handleMovieSubmit} className="form">
                <h2>Update Movie Records</h2>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input
              type='text'
              id='movieName'
              name="movieName"
              value= {movieName}
               onChange={(e) => setmovieName(e.target.value)}
              placeholder='Enter Movie Name'
             
            />
          
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input
              type='number'
              id='ratings'
              name= "ratings"
              value= {ratings }
             onChange={(e) => setRatings(e.target.value)}
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input
              type='text'
              id='duration'
              name="duration"
                onChange={(e) => setduration(e.target.value)}
              value= {duration }
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button
              type='submit'
              className='mx-0'
              data-testid='addButton'
            >
              Save Changes
            </button>
          </div>
        </form>
        {/* update form movie */}

      </div>
    </section>
      {/* } */}
      </>
  )
}

export default UpdateMovieform
