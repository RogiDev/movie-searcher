import React from 'react';


import {Input,InputGroup,InputGroupAddon} from 'reactstrap';
import styles from './Search.module.css';


const search = (props) => {


      return (

          <InputGroup className={styles.Input}>
          <InputGroupAddon addonType="prepend"></InputGroupAddon>
        <Input
          onChange={props.changed}
        />
        </InputGroup>

    );

};

export default search;
