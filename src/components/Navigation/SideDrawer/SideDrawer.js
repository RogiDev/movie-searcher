import React,{Fragment} from 'react';

import Logo from '../../../containers/Layout/Logo/Logo.js';
import NavItems from '../NavigationItems/NavItems.js';
import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {
  let sideDrawerClasses = [ styles.SideDrawer, styles.Close ];
  if(props.open){
    sideDrawerClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <Fragment>
    <div className={sideDrawerClasses.join(' ')}>

      <div className={styles.Logo}>
          <Logo />
      </div>
    <nav>
    <NavItems />
    </nav>
    </div>
  </Fragment>
  );
};
export default sideDrawer;
