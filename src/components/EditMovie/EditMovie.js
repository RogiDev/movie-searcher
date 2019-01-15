import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {alert} from 'notie';
import {Button ,InputGroup,Input} from 'reactstrap';
import {saveMovie,addMovie} from '../../store/movieSearcher.js'
import withErrorHandler from '../../containers/withErrorHandler/withErrorHandler.js';
import axios from 'axios';


class EditMovie extends Component {

  state= {
    editedMovie:{}

}

componentWillMount = () => {
  this.state.editedMovie = {
      id: this.props.movie.id,
      poster_path: this.props.movie.poster_path,
      overview:this.props.movie.overview,
      vote_average:this.props.movie.vote_average,
      title:this.props.movie.title,
      release_date:this.props.movie.release_date
  }
}



  validationState = () => {
    let movie = this.props.movie;
        for (let key in movie) {
            if (movie[key] === '' || movie[key] === ' ') {
                new alert({
                  type:3,
                  text:'Please Fill All Fields!'
                });
                return false;
            }else{
             new alert({type: 1, text: 'Your Movie Has Been Added' })
            }
        }
  }


  closeModal = (event, modalClicked,validationState,movie,saveMovie) => {
      this.props.saveMovie(movie);
  }


  InputOnChangeHandler = (event,inputIdentifier) => {
    event.preventDefault();
    let  updatedMovie = {
        ...this.state.editedMovie[inputIdentifier]
      };
   
    updatedMovie[inputIdentifier] =  event.target.value;
    this.setState({
      editedMovie:updatedMovie
     
    });

  }

  render() {
    
    let movieFormArray = [];
    for(let key in this.state.editedMovie){
      movieFormArray.push({
        id:key
      })
    }
    let form = 
    movieFormArray.map( (key,i) => {
     
        return(
         
          <form >
            
            <img width='100px' alt='poster' src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`} />
            <hr></hr>
            <label>You Choose: {this.state.editedMovie.title}</label>
              <div style={{display:'flex', textAlign:'center' ,justifyContent:'center'}}>
          <InputGroup style={{display:'block',width:'80%'}} key={key + i} >
            <p>Title:</p> <Input  type='text' defaultValue={this.props.movie.title} onChange={(event)=>this.InputOnChangeHandler(event,key.id)} />
            <p>Rate:</p> <Input type='text' defaultValue={this.props.movie.vote_average} onChange={(event)=>this.InputOnChangeHandler(event,key.id)} />
            <p>Date:</p> <Input type='text' defaultValue={this.props.movie.release_date} onChange={(event)=>this.InputOnChangeHandler(event,key.id)} />
            <p>Overview</p> <Input type='text' defaultValue={this.props.movie.overview} onChange={(event)=>this.InputOnChangeHandler(event,key.id)} />
          </InputGroup>
        </div>
          <div style={{marginTop:'10px',display:'flex',justifyContent: 'space-around',textAlign:'center',
          alignItems:'center'}}>
          <Button style={{backgroundColor: "#6D0301",
        color: "white",
        boxSizing: "border-box",
        display:'block',
        width:'30%'

      }}onClick={(event) => this.closeModal(event,this.props.modalClosed('false'),this.validationState,key,this.props.saveMovie(this.props.movie))} >Save</Button>
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
              {form[0]}
        </Fragment>
    );
  }
}



export default connect(null,{saveMovie,addMovie})(withErrorHandler(EditMovie,axios));
