import {
  GET_TRENDING_SUCCESS,
  GET_TRENDING_FAIL,
  SEARCH_SUCCESS,
  SEARCH_FAIL
} from './constants';

const initialState = {
  trendingList: [],
  searchList: [],
  searchPagination: {
    count: 6,
    offset: 0
  },
  trendingError: null,
  searchError: null,
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
        trendingError: payload
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        searchList: [...state.searchList, ...payload.data]
      };
    case SEARCH_FAIL:
      return {
        ...state,
        searchError: payload
      };
    default:
      return state;
  }
}
