import React, {Component} from  'react';
import fire from '../javascript/firebase';
import TrackList from './TrackList';
import LogoutButton from './LogoutButton';

class Homepage extends Component {

  constructor (props, context) {
    super(props, context);
    this.state = {
      currentTrack: null,
      trackList: []
    };

    this.handleData = this.handleData.bind(this);
  }

  componentDidMount() {
    let self = this;
    let userId = this.props.user;
    let songList = fire.database().ref(userId);
    songList.on('child_added', function (data) {
      self.handleData(JSON.stringify(data.val()));
    });
  }

  handleData(data) {
    let list = this.state.trackList;
    list.push(data);
    console.log("Homepage - ",data);
    this.setState({
      currentTrack: data,
      trackList: list
    })
  }

  render() {
    return (
      <div>
        <h1>Rakesh Gangwar</h1>
        <TrackList songList={this.state.trackList}/>
        <LogoutButton/>
      </div>
    )
  }
}

export default Homepage;
