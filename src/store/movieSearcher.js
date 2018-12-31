import {SEARCH_MOVIES,ADD_MOVIE,UPDATE_MOVIE,SAVE_MOVIE, POPULAR_MOVIES,SELECT_MOVIE, CLEAN_SEARCH} from './actions.js'
import axios from 'axios';
import notie from 'notie'


let movieArray = [];



export const searchMoviesFromDB = (name) => {
  return dispatch =>{
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=70037eb6c1b2400133d1c709f9d0dd6f&query=${name}`)
    .then(res =>{
    dispatch(searchMovies(res.data.results))
  }).catch(err => console.log(err.message));
  };
}

export const searchMovies = movies =>{
    return{
      type:SEARCH_MOVIES,
      payload: movies,
      clicked:true
    };
}

export const getPopularMovies = () => {
  return disptach =>{
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=70037eb6c1b2400133d1c709f9d0dd6f&language=en-US&page=1')
    .then(res =>{
      if(res.status === 200){
      disptach({
        type:POPULAR_MOVIES,
        payload:res.data.results
      });
    }else{
      return new notie.alert({
        type:3,
        text:'Sorry Something Went Wrong...'
      })
    }
  });
  };
}

export const updateMyMovies = movie =>{
  return dispatch =>{
  const valueId = movieArray.findIndex(value => movie === value);
        duplicateMovie(movie);
        movieArray[valueId] = movie;
      dispatch({
        type:UPDATE_MOVIE,
        payload:movieArray[valueId]
      });
    };
}

export const saveMovie = movie => {
  return dispatch =>{
    movie ? updateMyMovies(movie) : addMovie(movie)
  dispatch({
    type:SAVE_MOVIE,
    payload:movieArray.push(movie)

  });

};

}
export const addMovie = (movie) =>{
  return disptach => {
  const movieAdd = duplicateMovie(movie);
        if (movieAdd === movie){ return;
        }else {
            movieArray.push(movieAdd);
            disptach({
              type:ADD_MOVIE,
              payload:movieArray
            })
        }
  };
}

export const duplicateMovie = (movies) => {
    let duplicate = false;
      movies.some(duplicated => {
        if (duplicated.id !== movies.id) {
            duplicate = true;
            return new notie.alert({
              type:3,
              text:'This Movie is Already exist',
              position:'top',
            })
          }else{
            return new notie.alert({
              type:1,
              text:'This Movie is Added exist',
              position:'top'
          })
        }

      });
      return duplicate;
    }


export const selectedMovieSearch = movie =>{
  return dispatch => {
    dispatch({
    type:SELECT_MOVIE,
    payload:movie
    });
  };
}






export const cleanAllData = () => {
  return dispatch =>{
    dispatch({
      type:CLEAN_SEARCH,
      payload:{},
      clicked:false
    });

  };
};
