import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import withErrorHandler from '../../containers/withErrorHandler/withErrorHandler.js';
import axios from 'axios';
import { withFormik,Form,Field } from 'formik';
import * as Yup from 'yup';
import {withRouter} from 'react-router-dom';
import styles from './EditMovie.module.css'

class EditMovie extends Component {

constructor(props){
  super(props);
}
closeModal = (event) => {
 
}

  render() {

    let finalForm =
   
          <Form 
           onSubmit={this.props.handleSubmit}>
          {this.props.clicked === !true 
            ?
            <img width='100px' alt='poster' src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`} />
            :
            <div>
              <label>No Img</label>
            </div>
            }
            <hr></hr>
            <div>
              {this.props.touched.title && this.props.errors.title && <p>{this.props.errors.title}</p>}
          <label>Title:</label>
          <Field
          type="text"
          name='title' 
            />
            </div>
            <div>
            { this.props.touched.release_date  && this.props.errors.release_date && <p>{this.props.errors.release_date}</p>}
          <label>Date:</label>
          <Field
          type="date"
          name="release_date"
          />
          </div>
            <div>
            { this.props.touched.vote_average  && this.props.errors.vote_average && <p>{this.props.errors.vote_average}</p>}
          <label>Rate:</label>
          <Field 
          name='vote_average'
          type="number"
         
           />
            </div>
            <div>
            {this.props.touched.overview && this.props.errors.overview && <p>{this.props.errors.overview}</p>}
          <label>Overview:</label>
          <Field
          name='overview'
          type="overview"
          />
          </div>
           <hr></hr>
           <div style={{marginTop:'10px',display:'flex',justifyContent: 'space-around',textAlign:'center',
        alignItems:'center'}}>
        <Button style={{backgroundColor: "#6D0301",
      color: "white",
      boxSizing: "border-box",
      display:'block',
      width:'50%'

    }} type="submit" >Save</Button>
    <Button style={{backgroundColor: "#6D0301",
      color: "white",
      boxSizing: "border-box",
      display:'block',
      width:'50%'
    }} onClick={(event) => this.props.modalClosed('false')}>Cancel</Button>
  </div>
  
     </Form>;

        return (
          <Fragment>
             <div className={styles.Input}>
              {finalForm}
              </div>
        </Fragment>
    );
        
   }
}

const mapStateToProps = state =>{
  return {
    clicked:state.clicked,
    movie:state.movie
}
};

const connection = 
withRouter(connect(mapStateToProps)(withErrorHandler(EditMovie,axios)));
const formik = withFormik({
  mapPropsToValues: (props) => ({
      title:props.movie.title,
      overview:props.movie.overview,
      vote_average:props.movie.vote_average,
      release_date:props.movie.release_date,
      id:props.movie.id,
      poster_path:props.movie.poster_path
  }),
  handleSubmit:(values,{props}) => {
  props.saveMovie(values);
  props.modalClosed('false');
  props.history.push('/mymovies');
  console.log(props);
  },
  enableReinitialize:true,
  validationSchema: ()=> Yup.object().shape({
  title: Yup.string('Title Have To Be A String!').required('Title has been required').min(2),
  overview: Yup.string('overview must be a string!'),
  vote_average: Yup.number('Rate Should Be A Number!'),
  release_date:Yup.date()
  })
  })(connection);
  
  
export default (formik);