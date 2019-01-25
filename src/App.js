import React, { Component } from 'react';
import styles from './App.module.css';
import Layout from './containers/Layout/Layout.js';
import MovieSearcher from './containers/MoviesSearcher/MovieSearcher.js';
import {Switch,Route} from 'react-router-dom';
import MyMovies from './containers/MyMovies/MyMovies';

class App extends Component {
  render() {
    return (
      <div >
          <Layout lassName={styles.App}>
          <Switch>
            <Route path="/" exact component={MovieSearcher} />
            <Route path="/mymovies" component={MyMovies} />
            <Route render={() => <h1>Page Not Found!</h1>}/>
          </Switch>
          </Layout>
      </div>
    );
  }
}

export default App;
