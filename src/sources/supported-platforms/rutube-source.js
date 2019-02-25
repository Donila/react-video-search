class RuTubeParser {
  constructor() {
    this.name = 'RuTube';
    this.implemented = false;
    this.pattern = /\brutube.ru\b/;
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

  getVideoId() {
    return null;
  }
}

export default RuTubeParser
