import React from 'react';

import appLogo from '../../../imgs/Logo.png';
import styles from './Logo.module.css';

const logo = (props) => (
  <div className={styles.Logo} >
  <img src={appLogo} alt="MyLogo"/>
  <h2>Movie Searcher</h2>
  </div>

);

export default logo;
