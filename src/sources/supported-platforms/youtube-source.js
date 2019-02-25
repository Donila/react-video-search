import axios from 'axios'
import Video from '../video';

class YouTubeSource {
  static API_KEY = 'AIzaSyBDQtXVautsQ5sXB9U6yLgF4H_NNMsWBV8';
  constructor() {
    this.name = 'YouTube';
    this.implemented = true;

    // eslint-disable-next-line
    this.pattern = /(?:.+?)?(?:\/v\/|watch\/|\?v=|\&v=|youtu\.be\/|\/v=|^youtu\.be\/|watch\%3Fv\%3D)([a-zA-Z0-9_-]{11})+/;
  }

  parseLink(link) {
    if(!this.isLink(link)) {
      return '';
    }
    
    return link;
  }

  isLink(link) {
    if(!link) {
      return false;
    }

    return this.pattern.test(link);
  }

  getVideoId(link) {
    let linkSplitted = [];

    if(link.includes('v=')) {
      linkSplitted = link.split('v=');
    }

    if(link.includes('youtu.be/')) {
      linkSplitted = link.split('youtu.be/');
    }

    if(linkSplitted[1]) {
      return linkSplitted[1].slice(0, 11);
    }

    return null;
  }

  async search(term, maxresults) {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxresults}&q=${term}&key=${YouTubeSource.API_KEY}`
    let results = await axios.get(url);
    let videos = [];
    if(results.data) {
      for(let i in results.data.items) {
        let ytVideo = results.data.items[i];
        if(ytVideo.id && ytVideo.id.kind === 'youtube#video') {
          let video = new Video({
            source: 'YouTube',
            id: ytVideo.id.videoId, 
            name: ytVideo.snippet.title,
            description: ytVideo.snippet.description
          });

          videos.push(video);
        }
      }
    }

    return videos;
  }
}

export default YouTubeSource;