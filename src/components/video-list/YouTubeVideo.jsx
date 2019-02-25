import React from 'react'
import YouTubeFrame from '../video-frames/YouTubeFrame';

class YouTubeVideo extends React.Component {
  render() {
    return (
      <div className="video" key={this.props.video.id}>
        <div className="box">
          <div className="video-box">
              <div className="video-frame">
                <YouTubeFrame id={this.props.video.id} autoplay={false} width={250} height={200}/>
              </div>
              <div className="video-content">
                <div className="video-header">
                  {this.props.video.name}
                </div>
                <div className="video-text">
                  {this.props.video.description}
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default YouTubeVideo