import React, {Component} from  'react';
import Button from 'material-ui/Button';
import fire from '../javascript/firebase';

class LogoutButton extends Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    fire.auth().signOut().then(function () {
      console.log("User signed out!")
    }).catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return (
      <Button raised color="primary" onClick={this.handleLogout}>Sign Out</Button>
    )
  }
}

export default LogoutButton;