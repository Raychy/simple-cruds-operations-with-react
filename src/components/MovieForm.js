import React, { useState } from 'react'

function Movieform({addMovie}) {
  // const [editing, setEditing] = useState(false)
  const [movieName,setmovieName] = useState(''),
        [ratings, setRatings] = useState(''),
        [duration, setduration] = useState('');


  const handleMovieSubmit = e =>{
    e.preventDefault();
     if(movieName!=='' && ratings !== '' && duration !== ''){
      addMovie(movieName,ratings,duration);
   
     }
     setmovieName('');
     setRatings('');
     setduration('')

  };

  return (
    <>
    {/* {!editing &&  */}
    <section className='movie-form-card '>
      <div className='pa-30'>
       
                <form onSubmit={handleMovieSubmit} className="form">
                <h2>Add New Movie </h2>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input
              type='text'
              id='name'
              name="name"
              value= {movieName}
               onChange={(e) => setmovieName(e.target.value)}
              placeholder='Enter Movie Name'
              data-testid='nameInput'
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input
              type='number'
              id='ratings'
              name= "ratings"
              value= {ratings}
             onChange={(e) => setRatings(e.target.value)}
              placeholder='Enter Rating on a scale of 1 to 100'
              min={1}
              max={100}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input
              type='text'
              id='duration'
              name="duration"
                onChange={(e) => setduration(e.target.value)}
              value= {duration}
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
            />
          </div>
      
          <div className='layout-row justify-content-end'>
            <button
              type='submit'
              className='mx-0'
              data-testid='addButton'
            >
              Add Movie
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

export default Movieform
