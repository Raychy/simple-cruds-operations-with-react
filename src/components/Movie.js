import React from 'react'

const Movie = (props) => {
  // console.log(props.toggleEditForm);
//   function titleCase(str) {
//     return str
//         .split(' ')
//         .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
//         .join(' ');
// }
  return (
    <>
      <tr>
      {/* <td className='my-3'>{props.movie.movieId}  </td> */}
      <td className='my-3'>{props.movie.movieName}</td>
       {/* use this paragraph for props.movie ratings, for example: 'Ratings: 88/100' */}
       <td className='my-0'> {props.movie.ratings}</td>
   
       {/* use this tdaragratdh for props.movie duration, for examtdle: '2.5 Hrs' */}
       <td className='justify-content-end'>  {props.movie.duration}</td>
       <td> 
         <button type='button ' onClick={()=> props.deleteMovieBtn(props.movie.id)} className='del-btn'> Del</button>
          &nbsp; 
       <button type='button' onClick={() => props.showEditForm(props.movie.id)} className='edit-btn'> Edit</button> 
       </td>
      </tr>
    
     </>
 
  )
}

export default Movie