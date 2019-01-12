import {SEARCH_MOVIES,UPDATE_MOVIE,SAVE_MOVIE,SELECT_MOVIE,ADD_MOVIE,POPULAR_MOVIES,CLEAN_SEARCH} from './actions.js'


const initialState = {
  movies: [],
  clicked:false,
  movie:{},
  myMovies:[]
}

const reducer = (state = initialState , action = {}) => {
    switch (action.type) {
      case (SEARCH_MOVIES):{
      return{
      ...state,
      movies:[].concat(action.payload),
      searchValue:action.searchValue,
      clicked:true
        };
      }
    case (POPULAR_MOVIES):{
        return{
          ...state,
        movies: state.movies.concat(action.payload)

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
      return {
        ...state,
      myMovies:action.payload,
      movie:action.movie
      
      };
    }

    case(SAVE_MOVIE):{
      return {
      ...state,
      myMovies:action.payload,
      movie:action.movie
      };
    }
  

    case(UPDATE_MOVIE):{
      return {
        ...state,
        myMovies:action.payload, 
        movie:action.movie
      };
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
