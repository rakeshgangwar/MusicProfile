import React, { Component } from 'react';
import './App.css';
import Loginpage from './components/Loginpage';
import Homepage from './components/Homepage';
import fire from './javascript/firebase';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      loggedIn: false,
      userId: ""
    }
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          loggedIn: true,
          userId: user.uid
        });
        console.log("User is signed in - ",user.email);
      }
      else {
        this.setState({
          loggedIn: false,
          userId: ""
        });
      }
    })
  }

  render() {
    return this.state.loggedIn ? (
        <div className="App">
          <Homepage user={this.state.userId}/>
        </div>
      ) : (
      <div className="App">
        <Loginpage/>
      </div>
    )
  }
}

export default App;
