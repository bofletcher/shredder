import React, { Component } from 'react';

import styles from './Main.module.css'
import Menu from '../Menu/Menu'
import Backdrop from '../Backdrop/Backdrop'
import SideDrawer from '../SideDrawer/SideDrawer';
import Lifts from '../Pages/Lifts/Lifts'


import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Builder from '../Pages/Builder/Builder';
import Shred from '../Pages/Shred/Shred';
import { collectIdsAndDocs } from '../../utilites';
import { firestore } from '../../firebase';
import Authentication from '../Authentication';


class MainMenu extends Component {
  state ={
    sideDrawerOpen: false,
    lifts: [],
  }

  unsubscribeFromFirestore = null;

  componentDidMount = async() => {
    this.unsubscribeFromFirestore = firestore.collection('lifts').onSnapshot(snapshot => {
      const lifts = snapshot.docs.map(collectIdsAndDocs);
      console.log({lifts})
      this.setState({lifts})
      console.log(this.state.lifts)
    })
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState)=> {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

 


render() {
  let backdrop;

  if (this.state.sideDrawerOpen) {
    backdrop = <Backdrop click={this.backDropClickHandler}/>
  }

  return (
    <Router basename ="/" >
    <div className={styles.Page}>
      <Menu  drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen} click={this.backDropClickHandler}/>
      {backdrop}
        <div className={styles.MainContainer} style={{marginTop: "3.5em"}}>
          <Switch>
            <Route path="/" exact component={Authentication}/>
            <Route path="/Lifts" /*component={Lifts}*/  render={(props) => <Lifts lifts={this.state.lifts}/>}/>
            <Route path="/Builder" component={Builder}/>
            <Route path="/Shred" component={Shred}/>
          </Switch>

        </div>

    </div>
    </Router>
  )
}
}

export default MainMenu;