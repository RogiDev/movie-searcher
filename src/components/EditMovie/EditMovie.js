import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {alert} from 'notie';
import {Button ,InputGroup,Input} from 'reactstrap';
import {saveMovie} from '../../store/movieSearcher.js'
import withErrorHandler from '../../containers/withErrorHandler/withErrorHandler.js';
import axios from 'axios';


// https://image.tmdb.org/t/p/w500/

class EditMovie extends Component {
  state={
    editedMovie:null

}


  validationState = () => {
    let movie = this.props.movie;
        for (let key in movie) {
            if (movie[key] === '' || movie[key] === ' ') {
                alert({
                  type:3,
                  text:'Please Fill All Fields!'
                });
                return false;
            }else{
              alert({type: 1, text: 'Your Movie Has Been Added' })
            }
        }
  }


  closeModal = (event, modalClicked,saveMovie,validationState,showDialog) => {

  }


  InputOnChangeHandler = (event,inputIdentifier) => {
    event.preventDefault();
    let  updatedMovie = {
        ...this.state.editedMovie
      };
    let updatedMovieElement ={
      ...updatedMovie[inputIdentifier]
    };

    updatedMovieElement = event.target.value;
    updatedMovie[inputIdentifier] = updatedMovieElement;
    this.setState({
      editedMovie:updatedMovie

    });

  }

  render() {

    let movieForm = Object.values(this.props.movie).map((key,i) => {

        return(

          <form >
            <img width='100px' alt='poster' src={`https://image.tmdb.org/t/p/w500/${key.poster_path}`} />
            <hr></hr>
            <label>You Choose: {key.title}</label>
              <div style={{display:'flex', textAlign:'center' ,justifyContent:'center'}}>
          <InputGroup style={{display:'block',width:'80%'}} key={key + i} >
            <p>Title:</p> <Input  type='text' defaultValue={key.title} onChange={(event)=>this.InputOnChangeHandler(event,this.inputIdentifier)} />
            <p>Rate:</p> <Input type='text' defaultValue={key.vote_average} onChange={(event)=>this.InputOnChangeHandler(event,this.inputIdentifier)} />
            <p>Date:</p> <Input type='text' defaultValue={key.release_date} onChange={(event)=>this.InputOnChangeHandler(event,this.inputIdentifier)} />
            <p>Overview</p> <Input type='textarea' defaultValue={key.overview} onChange={(event)=>this.InputOnChangeHandler(event,this.inputIdentifier)} />
          </InputGroup>
        </div>
          <div style={{marginTop:'10px',display:'flex',justifyContent: 'space-around',textAlign:'center',
          alignItems:'center'}}>
          <Button style={{backgroundColor: "#6D0301",
        color: "white",
        boxSizing: "border-box",
        display:'block',
        width:'30%'

      }}onClick={(event) => this.closeModal(event,this.props.modalClosed('false'),this.props.saveMovie(this.state.editedMovie ),key,this.validationState)} >Save</Button>
      <Button style={{backgroundColor: "#6D0301",
        color: "white",
        boxSizing: "border-box",
        display:'block',
        width:'30%'
      }}>Cancel</Button>
    </div>
        </form>

        );
    })
    .reduce((arr,el) =>{
      return arr.concat(el);
    },[]);


        return (
          <Fragment>

              {movieForm}
        </Fragment>
    );
  }
}


const mapStateToProps = state =>{
  return {
    ...state
  }

}


export default connect(mapStateToProps,{saveMovie})(withErrorHandler(EditMovie,axios));
