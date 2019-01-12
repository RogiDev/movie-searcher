import {SEARCH_MOVIES,UPDATE_MOVIE,SAVE_MOVIE,SELECT_MOVIE,ADD_MOVIE,POPULAR_MOVIES,CLEAN_SEARCH} from './actions.js'


const initialState = {
  movies: [],
  clicked:false,
  movie:{}
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
        movies: [].concat(action.payload)

        };
      }

      case(SELECT_MOVIE):{
        return{
        ...state,
          movie:[].concat(action.payload)
      };
    }
    case(ADD_MOVIE):{
      return {
        ...state,
      movies:action.payload

      };
    }

    case(SAVE_MOVIE):{
      return {
      ...state,
<<<<<<< HEAD
      movie:[].concat(action.payload),
=======
      movie:state.movie.concat(action.payload),
>>>>>>> parent of c0fc0b4... improve my app!

    };
    }
    case(UPDATE_MOVIE):{
      return {
        ...state,
        movies:state.movies.concat(action.payload)
      };
    }



    case(CLEAN_SEARCH):{
      return{
        ...state,
        movies:[],
        searchValue:'',
        clicked:false

      };
    }
      default:{
        return state
      }
    }
 }

export default reducer;
