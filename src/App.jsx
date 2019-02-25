import React from 'react';
import 'bulma';
import { getSource, search } from './sources/sources';

import InputControl from './components/input/InputControl';
import VideoFrame from './components/video-frames/VideoFrame';
import VideoList from './components/video-list/VideoList';

class App extends React.Component {
  constructor() {
    super();
    this.defaultState = { input: '', isLink: false, source: null, videos: [], videoId: null };
    this.state = Object.assign({}, this.defaultState);
  }

  async onSearch(input) {
    let changeStateObj = Object.assign({}, this.defaultState);

    let source = getSource(input);

    if(source !== null) {
      changeStateObj.isLink = true;
      changeStateObj.source = source;
      changeStateObj.videoId = source.getVideoId(input);
    } else {
      changeStateObj.videos = await search(input);
    }

    this.setState(Object.assign(this.state, changeStateObj));
  }

  onRefresh() {
    this.setState(Object.assign(this.state, this.defaultState));
  }

  render() {
    return (
      <div className="container main-container">
        <h1 className="header">Welcome to parsing video links application</h1>
        <div className="video-link-form-container">
          <InputControl onChange={(userInput) => this.onSearch(userInput)} state={this.state} onRefresh={() => this.onRefresh()}/>
          { this.state.isLink ? <div>{this.state.source.name} link detected</div> : null }
          <div className="videos-container">
            { this.state.source ? <VideoFrame source={this.state.source} id={this.state.videoId} width={document.body.clientWidth}/> : <VideoList videos={this.state.videos}/> }
          </div>
        </div>
      </div>
    )
  }
}

export default App;