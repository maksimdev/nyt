import axios from 'axios';

export function getJSON(url) {
  return axios.get(url);
}