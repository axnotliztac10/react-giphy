import {
  GET_TRENDING_SUCCESS,
  GET_TRENDING_FAIL
} from './constants';

const initialState = {
  trendingList: [],
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TRENDING_SUCCESS:
      return {
        ...state,
        trendingList: [...payload]
      };
    case GET_TRENDING_FAIL:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
