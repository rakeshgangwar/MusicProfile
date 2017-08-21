import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import fire from '../javascript/firebase';

class Loginpage extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      username:"",
      password:""
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    let username = this.state.username;
    let password = this.state.password;
    fire.auth().signInWithEmailAndPassword(username, password).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return(
      <div>
        <h2>Login Page</h2>
        <Input type="text" placeholder="Username" onChange={(event) => this.setState({username: event.target.value})} />
        <br/>
        <br/>
        <Input type="password" placeholder="Password" onChange={(event) => this.setState({password: event.target.value})} />
        <br/>
        <br/>
        <Button raised color="primary" onClick={this.handleLogin}>Sign In</Button>
      </div>
    )
  }
}

export default Loginpage;
