import React from 'react';

import styles from './NavItems.module.css';
import NavItem from './NavItem/NavItem.js';


const  navItems = (props) => (
    <ul className={styles.NavItems}>
      <NavItem link='/' active>Search Movie</NavItem>
    </ul>
  );


export default navItems;
