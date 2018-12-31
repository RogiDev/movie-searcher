import React , {Fragment,Component} from 'react';
import Backdrop from '../Backdrop/Backdrop.js';
import styles from './Model.module.css';



class MyModal extends Component{

render(){
    return (
      <Fragment>
        <Backdrop show={this.props.show} modalClosed={this.props.modalClosed}/>
      <div
        className={styles.Modal}
        style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1' : '0'
        }}>
        {this.props.children}
      </div>
    </Fragment>
    );
  }
}





export default MyModal;
