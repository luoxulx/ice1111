import React, { Component } from 'react';
import SimpleVideoPlayer from './components/SimpleVideoPlayer';

export default class Video extends Component {
  static displayName = 'Video';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="video-page">
        <SimpleVideoPlayer />
      </div>
    );
  }
}
