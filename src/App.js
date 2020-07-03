import React, { Component } from 'react';
import './App.css';
import {firestore} from './firebase'
import Login from './components/Login/Login'
import Main from './components/Main/Main'



class App extends Component {
  state ={
    loggedIn: false,
  }

  
  componentDidMount = async() => {
    const snapshot = await firestore.collection('lifts').get();

    console.log({snapshot})
  }
  loginHandler() {
    this.setState({
      loggedIn: true
    })
    console.log(this.state.loggedIn)
  }

  handleChange = () => {
    

    this.setState({ 
      loggedIn: true
    });
  };



  
  render() {
  let app;
  if(this.state.loggedIn){
    app = <Main />
  } else {
    app = <Login  click={() => this.loginHandler()} />
  }
  
  return (
    <div className="App">
      {app}
    </div>
  );
  }
}

export default App;
