import axios from 'axios';

export const fetchPlanet = () =>
  axios.request({
    url:
      'https://api.nasa.gov/planetary/apod?api_key=NwlYGbD0VD2zet3MRCZkRYLJ6b6DwDlqZZFs6EUQ',
    method: 'get',
  });
