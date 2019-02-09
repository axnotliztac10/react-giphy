import {
  GET_TRENDING_INIT,
  GET_TRENDING_SUCCESS,
  GET_TRENDING_FAIL,
  SEARCH_INIT,
  SEARCH_SUCCESS,
  SEARCH_FAIL
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

export const searchInit = payload => {
  return {
    type: SEARCH_INIT,
    payload
  };
}

export const searchSuccess = payload => {
  return {
    type: SEARCH_SUCCESS,
    payload
  };
}

export const searchFail = payload => {
  return {
    type: SEARCH_FAIL,
    payload
  };
}
