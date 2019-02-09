import request from 'api/request';

export function getTrending() {
  return request(`https://api.giphy.com/v1/gifs/trending?api_key=qfOZoxGiLM4ZZfJIrcAuDez6PavVyFKR&limit=2`, {});
}
