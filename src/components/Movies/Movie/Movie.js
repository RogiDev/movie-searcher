import React,{Component,Fragment} from 'react';
import {Card, CardImg,CardBody,CardText,Button,CardTitle} from 'reactstrap';
import styles from './Movie.module.css';
import {connect} from 'react-redux';
import {selectedMovieSearch} from './../../../store/movieSearcher.js'
import withErrorHandler from '../../../containers/withErrorHandler/withErrorHandler.js';
import axios from 'axios';

class Movie extends Component{


  modalShow = (modalClicked,selectedMovieSearch,movie ) => {
    

  }
  render(){
    let movieList = this.props.movies.map((movie,i) => {
      return(
        <li key={movie.id}>
      <Card  className={styles.Card}>
        <CardBody className={styles.CardBody}>
          <div className={styles.ImgDiv}>
          <CardImg width="200px" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Card image cap" />
          </div>
          <CardTitle>Title: {movie.title}</CardTitle>
          <CardText><label>Overview:</label> {movie.overview} </CardText>
        <CardText><label>Release Date:</label> {movie.release_date}</CardText>
        <CardText><label>Rated:</label> {movie.vote_average}</CardText>
        <Button style={{backgroundColor: "#6D0301",
      color: "white",
      boxSizing: "border-box",
      textAlign:'center',
      alignItems:'center',
      display:'block'
    }} onClick={ (movie) =>  this.modalShow(this.props.modalClicked(movie[i]),this.props.selectedMovieSearch(this.props.movies[i]),this.props.movies[i])} >Edit</Button>
        </CardBody>
      </Card>
    </li>
);
    })
  return (
<Fragment>
  <ul className={styles.ListItem}>
  {movieList}
</ul>
</Fragment>

  );
 }
}


const mapStateToProps = state => {
  return {
  ...state,
  movie:state.movie,
  movies:state.movies
  }
}
export default connect(mapStateToProps,{selectedMovieSearch})(withErrorHandler(Movie,axios));
