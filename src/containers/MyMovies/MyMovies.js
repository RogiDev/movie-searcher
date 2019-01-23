import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import styles from './MyMovies.module.css';

class MyMovies extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        let myMoviesArray = Object.values(this.props.myMovies).map(movie => {
            return (
                <li className={styles.MovieHolder}>
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


export default connect(mapStateToProps)(MyMovies);
