import React from 'react';
import YouTubeFrame from './YouTubeFrame';

class VideoFrame extends React.Component {
  render() {
    if(!this.props.source.implemented) {
      return (<div>We are working on to show {this.props.source.name} videos. Stay tuned.</div>);
    }

    if(this.props.source.name === 'YouTube') {
      return (
          <div className="video-embed-container">
            <YouTubeFrame id={this.props.id} autoplay={true} width={this.props.width} height={this.props.height} />
          </div>
        )
    }
  }
}

export default VideoFrame