import {
  GET_TRENDING_INIT,
  GET_TRENDING_SUCCESS,
  GET_TRENDING_FAIL
} from './constants';

export const getTrendingInit = payload => {
  return {
    type: GET_TRENDING_INIT,
    payload
  };
}

export const getTrendingSuccess = payload => {
  return {
    type: GET_TRENDING_SUCCESS,
    payload
  };
}

export const getTrendingFail = payload => {
  return {
    type: GET_TRENDING_FAIL,
    payload
  };
}
