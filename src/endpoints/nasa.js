import axios from 'axios';

export const fetchPlanet = () =>
  axios.request({
    url:
      'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo',
    method: 'get',
  });
