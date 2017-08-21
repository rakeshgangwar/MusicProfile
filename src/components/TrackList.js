import React, {Component} from 'react';

class TrackList extends Component {

  render() {
    let songList = this.props.songList;
    return (
      <div>
        {songList}
      </div>
    )

  }
}

export default TrackList;