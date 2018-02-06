import axios from 'axios';

export const fetchPlanet = () =>
  axios.request({
    url:
      'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo',
    method: 'get',
  });

export const fetchCuriosityPhotos = () =>
  axios.request({
    url:
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY',
    method: 'get',
  });
