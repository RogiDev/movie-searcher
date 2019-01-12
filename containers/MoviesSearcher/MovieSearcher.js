
import React, { Component,Fragment } from 'react';
import Search from '../../components/UI/Search/Search.js';
import Movie from '../../components/Movies/Movie/Movie.js';
import {Button} from 'reactstrap';
import axios from 'axios';
import Modal from '../../components/UI/Modal/Modal.js';
import {connect} from 'react-redux';
import {searchMoviesFromDB,cleanAllData, getPopularMovies} from '../../store/movieSearcher.js';
import EditMovie from '../../components/EditMovie/EditMovie.js';
import withErrorHandler from '../withErrorHandler/withErrorHandler.js';

export class MovieSearcher extends Component {

state ={
  movieName:'',
  open:false
}

componentWillMount() {
  this.props.getPopularMovies();
}
componentWillUnmount() {
  this.props.cleanAllData();
}




    searchMovieHandler = (event) => {

        let searchingKey =  event.target.value;
        searchingKey = searchingKey.replace(/[^a-zA-Z ]/g, "");
        searchingKey = searchingKey.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
      this.setState({
          movieName: searchingKey
      });


}

modalOpener = () => {
  this.setState({
    open:true
  });

}

closeModal = () =>{
  this.setState({
    open:false
  })
}


    render (){

      return (
        <Fragment >

          <div style={{display:'flex'}}>
            <Search changed={(event) => this.searchMovieHandler(event)}
            />
          <Button style={{marginTop:"18px" ,
              backgroundColor: "#6D0301",
            color: "white",
            boxSizing: "border-box",
            textAlign:'center',
            alignItems:'center',
            display:'block',
            width:'20%'
          }}
              clicked={this.props.clicked}
              onClick={()=> this.props.searchMoviesFromDB(this.state.movieName)}
          >Search</Button>
      </div>


        <Movie
         {...this.props}
          modalClicked={this.modalOpener}
          />


        <Modal show={this.state.open} modalClosed={this.closeModal}>
            <EditMovie {...this.props} modalClosed={this.closeModal} />
        </Modal>



        </Fragment>
      );
    }

}


const mapStateToProps = state =>{
    return {
      movies:state.movies,
      clicked:state.clicked,
      movie:state.movie

  }
};


export default connect(mapStateToProps,{searchMoviesFromDB,cleanAllData,getPopularMovies})(withErrorHandler(MovieSearcher,axios));
