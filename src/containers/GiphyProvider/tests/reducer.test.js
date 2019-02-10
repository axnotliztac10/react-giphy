import reducer from '../reducer';

describe('Test reducer', () => {
  const initialState = {
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
  };

  it('', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  })
});
