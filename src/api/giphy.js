import request from 'api/request';

const apiHost = 'https://api.giphy.com/v1/gifs';
const apiKey = 'qfOZoxGiLM4ZZfJIrcAuDez6PavVyFKR';

export function getTrending() {
  return request(`${apiHost}/trending?api_key=${apiKey}&limit=6`, {});
}

export function search(search, { limit, offset }) {
  return request(`${apiHost}/search?api_key=${apiKey}&offset=${offset}&limit=${limit}&q=${search}`, {});
}
