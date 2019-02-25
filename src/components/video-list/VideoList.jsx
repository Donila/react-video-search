import React from 'react';
import YouTubeVideo from './YouTubeVideo';

class VideoList extends React.Component {
  renderVideo(video) {
    if(video.source === 'YouTube') {
      return (
        <YouTubeVideo video={video}/>
      )
    }
  }

  render() {
    let videos = [];
    for(let i in this.props.videos){
      videos.push(this.renderVideo(this.props.videos[i]));
    }

    return (
      <div className="video-list">
        {videos}
      </div>
    );
  }
}

export default VideoList