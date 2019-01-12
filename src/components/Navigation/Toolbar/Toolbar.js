import React from 'react';

import styles from './Toolbar.module.css';
import Logo from '../../../containers/Layout/Logo/Logo.js';
import NavItems from '../NavigationItems/NavItems.js';
import Toggle from './../SideDrawer/Toggle/Toggle.js';

const toolbar = (props) => (
    <header className={styles.Toolbar}>

      <div className={styles.Logo}>
      <Logo  />
      </div>
      <Toggle clicked={props.toggleClicked} />
      <nav className={styles.DesktopOnly}>
        <NavItems  />
      </nav>
    </header>
);

export default toolbar;
