import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

import {
  withGiphy,
  mapStateToProps,
  mapDispatchToProps
} from '../withGiphy';

describe('<withGiphy />', () => {
  const Wrapped = withGiphy(() => <div />);
  const props = {
    trendingList: [],
    searchList: [],
    searchPagination: {},
    trendingError: {},
    searchError: {},
    favorites: [],
    getTrending: () => {},
    search: () => {},
    searchFavorites: () => {},
    addRemoveFavorite: () => {}
  };
  const wrapper = shallow(<Wrapped {...props} />);

  it('should render correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});

describe('should test mapDispatchToProps and mapStateToProps', () => {
  it('getTrending', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).getTrending();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'GET_TRENDING_INIT'});
  });

  it('search', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).search();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'SEARCH_INIT'});
  });

  it('searchFavorites', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).searchFavorites();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'SEARCH_FAVORITES'});
  });

  it('addRemoveFavorite', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).addRemoveFavorite();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'ADD_REMOVE_FAVORITE'});
  });

  it('mapStateToProps', () => {
    const initialState = {
      gyphyProvider: {
        favorites: [],
        trendingList: [],
        searchList: [],
        searchPagination: {
          currentSearch: '',
          itemsPerPage: 6,
          offset: 0
        },
        trendingError: null,
        searchError: null,
      }
    };

    expect(mapStateToProps(initialState).searchList).toEqual(
      initialState.gyphyProvider.searchList
    );
  });
});
