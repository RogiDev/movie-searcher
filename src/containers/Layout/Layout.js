import React , {Fragment, Component} from 'react';
import {Container} from 'reactstrap';


import Toolbar from '../../components/Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer.js';


import styles from './Layout.module.css';



class Layout extends Component {
  state = {
    showSideDrawer:false
  }

   showSidedrawerHandler = () =>{
    this.setState({
      showSideDrawer:true
    });
  }

   toggleClickedHandler = () => {
    this.setState( prevState =>{
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Container className={styles.Layout}>

        <Toolbar toggleClicked={this.toggleClickedHandler}/>
      <SideDrawer open={this.state.showSideDrawer}
        closed={this.showSidedrawerHandler}/>
      <main>
        {this.props.children}
      </main>

    </Container>
      </Fragment>
    )
  }
}

export default Layout;
