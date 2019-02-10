import {
  GET_TRENDING_SUCCESS,
  GET_TRENDING_FAIL,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  ADD_REMOVE_FAVORITE,
  SEARCH_FAVORITES
} from './constants';

const initialState = {
  favorites: JSON.parse(window.localStorage.getItem('favorites')) || [],
  trendingList: [],
  searchList: [],
  searchPagination: {
    count: 6,
    offset: 0
  },
  trendingError: null,
  searchError: null,
};

const addRemoveFavoriteState = (selected, favorites) => {
  const filtered = favorites.filter(favorite => selected.id !== favorite.id);

  if (favorites.length === filtered.length) {
    selected.isFavorite = true;

    return [...favorites, selected];
  } else {
    return filtered;
  }
};

const setFavorites = (list, favorites) => {
  return list.map(element => {
    const isFavorite = favorites.find(favorite => favorite.id === element.id);
    element.isFavorite = isFavorite ? true : false;
    return element;
  });
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TRENDING_SUCCESS:
      return {
        ...state,
        trendingList: setFavorites([...payload], state.favorites)
      };
    case GET_TRENDING_FAIL:
      return {
        ...state,
        trendingError: payload
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        searchList: setFavorites([...state.searchList, ...payload.data], state.favorites)
      };
    case SEARCH_FAIL:
      return {
        ...state,
        searchError: payload
      };
    case ADD_REMOVE_FAVORITE:
      const newFavorites = addRemoveFavoriteState(payload, state.favorites);
      window.localStorage.setItem('favorites', JSON.stringify(newFavorites));

      return {
        ...state,
        favorites: newFavorites,
        trendingList: setFavorites([...state.trendingList], newFavorites),
        searchList: setFavorites([...state.searchList], newFavorites)
      };
    case SEARCH_FAVORITES:
      const filtered = state.favorites.map(favorite => {
        favorite.hideOnSearchFavorites = undefined;

        if (payload && !favorite.title.includes(payload)) {
          favorite.hideOnSearchFavorites = true;
        }

        return favorite;
      });

      return {
        ...state,
        favorites: filtered
      };
    default:
      return state;
  }
}
