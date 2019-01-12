import React, { Component } from 'react';
import styles from './App.module.css';
import Layout from './containers/Layout/Layout.js';
import MovieSearcher from './containers/MoviesSearcher/MovieSearcher.js';

class App extends Component {
  render() {
    return (
      <div >
          <Layout lassName={styles.App}>
            <MovieSearcher />
          </Layout>
      </div>
    );
  }
}

export default App;
