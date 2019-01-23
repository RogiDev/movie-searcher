import {SEARCH_MOVIES,ADD_MOVIE,SAVE_MOVIE, POPULAR_MOVIES,SELECT_MOVIE, CLEAN_SEARCH} from './actions.js'
import axios from 'axios';
import swal from 'sweetalert';



let movieArray = [];
let movie = null;



export const searchMoviesFromDB = (name) => {
  return dispatch =>{
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=70037eb6c1b2400133d1c709f9d0dd6f&query=${name}`)
    .then(res => {
      
     movie={
       id:res.data.results.id,
       title:res.data.results.title,
       overview:res.data.results.overview,
       vote_average:res.data.results.vote_average,
       poster_path:res.data.results.poster_path,
       release_date:res.data.results.release_date
     }
    dispatch({
      type:SEARCH_MOVIES,
      movies: res.data.results,
      movie:movie
    });
        }
  
  ).catch(res => (res.data));
};
}

export const getPopularMovies = () => {
  return dispatch =>{
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=70037eb6c1b2400133d1c709f9d0dd6f&language=en-US&page=1')
    .then(res =>{
        console.log(res.data);
      movie={
        id:res.data.results.id,
        title:res.data.results.title,
        overview:res.data.results.overview,
        vote_average:res.data.results.vote_average,
        poster_path:res.data.results.poster_path,
        release_date:res.data.results.release_date
      }
        dispatch({
        type:POPULAR_MOVIES,
        movies:res.data.results,
        movie:movie
       
      });
    });
  };
}

export const addMovie = movie =>{
  return dispacth =>{
    movie = {
          id:'',
          title:'',
          overview:'',
          vote_average:'',
          poster_path:'',
          release_date:''
    }
    
    dispacth({
        type:ADD_MOVIE,
        movie:movie,
        clicked:true
    });
  }
}
  
export const saveMovie = movie => {

 const i = movieArray.findIndex( item => item.title === movie.title);
 return dispatch =>{
  if( i > -1 ) {
     movieArray[i] = movie;
    swal("Your Movie Exist!");
  }else{
    movieArray.push(movie);
    swal("Your Movie Has Been Saved!");
  }

    dispatch({
      type:SAVE_MOVIE,
      movies:movieArray,
      movie:movie
      
    });
  }
}



export const selectedMovieSearch = movie =>{
  return dispatch => {
    movie = {
      id:movie.id,
      title:movie.title,
      overview:movie.overview,
      vote_average:movie.vote_average,
      poster_path:movie.poster_path,
      release_date:movie.release_date
}
    dispatch({
    type:SELECT_MOVIE,
    movie:movie
    });
  };
}






export const cleanAllData = () => {
  return dispatch =>{
    dispatch({
      type:CLEAN_SEARCH,
      payload:{},
      clicked:false,
      movie:{}
    });

  };
};
