import axios from 'axios';

const KEY = 'AIzaSyD_J-EaZVw7oFqC3xTX5XMp6NDH2xUDa_s';

export default axios.create({

  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
