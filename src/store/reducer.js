import {SEARCH_MOVIES,SAVE_MOVIE,SELECT_MOVIE,POPULAR_MOVIES,CLEAN_SEARCH, ADD_MOVIE} from './actions.js'


const initialState = {
  movies: [],
  clicked:false,
  movie:{},
  myMovies:[],
  myMovie:{}
}

const reducer = (state = initialState , action = {}) => {
    switch (action.type) {
      case (SEARCH_MOVIES):{
      return{
      ...state,
      movies:action.movies,
      movie:action.movie
     
        };
      }
    case (POPULAR_MOVIES):{
        return{
          ...state,
        movies:action.movies,
        movie:action.movie

        };
      }

      case(SELECT_MOVIE):{
        return{
        ...state,
          movie:{
            ...state.movie,
            id: action.movie.id,
            title: action.movie.title,
            overview: action.movie.overview,
            poster_path: action.movie.poster_path,
            vote_average: action.movie.vote_average,
            release_date: action.movie.release_date
          }
      };
    }

    case(ADD_MOVIE):{
      return{
        ...state,
        movie:action.movie,
        clicked:true
      }
    }
  
    case(SAVE_MOVIE):{
      return {
      ...state,
     myMovies:action.movies,
     myMovie:action.movie,
     clicked:false
    }
  }
  
    case(CLEAN_SEARCH):{
      return{
        ...state,
        movies:[],
        searchValue:'',
        clicked:false,
        movie:{}

      };
    }
      default:{
        return state
      }
    }
  }

export default reducer;
