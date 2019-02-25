import React from 'react'
import YouTube from 'react-youtube'

class YouTubeFrame extends React.Component {
  render() {
    const opts = {
      height: this.props.height || '480',
      width: this.props.width || '640',
    };

    // https://developers.google.com/youtube/player_parameters
    opts.playerVars = {
      autoplay: this.props.autoplay ? 1 : 0
    }

    if(this.props.id) {
      return (
        <YouTube
          containerClassName="youtube-video-container"
          className="youtube-video-container"
          videoId={this.props.id}
          opts={opts}
        />
      )
    } else {
      return null;
    }
  }
}

export default YouTubeFrame
