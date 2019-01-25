import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {deleteMovie} from '../../store/movieSearcher'
import styles from './MyMovies.module.css';
import {Button} from 'react-bootstrap';

class MyMovies extends Component {
   

    render(){
    
       
       let myMoviesArray = Object.values(this.props.myMovies).map((movie,i) => {
            
            return (
                <li className={styles.MovieHolder} key={movie.title}>
                <div>
                  <label>Title:</label>  {movie.title}
                </div>
                <div>
                  <label>Rate:</label>  {movie.vote_average}
                </div>
                <div>
                   <label>Release Date:</label> {movie.release_date}
                </div>
                <div>
                  <label>Overview:</label>  {movie.overview}
                </div>
                <hr></hr>
                    <Button style={{ backgroundColor: "#6D0301",
                            color: "white",
                            boxSizing: "border-box",
                            textAlign:'center',
                            alignItems:'center',
                            display:'flex',
                            margin:'auto',
                           }} 
                            onClick={(movie) => this.props.deleteMovie(movie[i])}>
                            Delete Movie
                            </Button>
                </li>
             
            );
        });
      
    
    
        return(
            <Fragment>
                <h2>My Movies:</h2>
                <div className={styles.Container}>
                <ul className={styles.ListItem}>
                {myMoviesArray}
                </ul>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>{
    return{
    ...state,
    myMovies:state.myMovies

    }
}


export default connect(mapStateToProps,{deleteMovie})(MyMovies);
