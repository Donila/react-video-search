import YouTubeSource from './supported-platforms/youtube-source';
import RuTubeSource from './supported-platforms/rutube-source';

function getSources() {
  let youTubeParser = new YouTubeSource();
  let ruTubeParser = new RuTubeSource();

  return [
    youTubeParser,
    ruTubeParser
  ];
};

export function getSource(link) {
  let sources = getSources();
  for(let i in sources) {
    if(sources[i].isLink(link)) {
      return sources[i];
    }
  }

  return null;
}

export async function search(term) {
  let sources = getSources();
  let videos = [];
  for(let i in sources) {
    if(sources[i].search && typeof(sources[i].search) === 'function') {
      try {
        let singleSourceVideos = await sources[i].search(term, 20);
        videos = videos.concat(singleSourceVideos);
      } catch(e) {
        console.error(e);
      }
    }
  }

  return videos;
}
