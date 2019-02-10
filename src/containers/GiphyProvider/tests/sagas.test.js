import { testSaga } from 'redux-saga-test-plan';

import {
  getTrendingSuccess,
  getTrendingFail,
  searchSuccess,
  searchFail
} from '../actions';
import {
  getTrending,
  search
} from 'api/giphy';
import { mapStateToProps as giphyState } from '../withGiphy';
import {
  searchInitSaga,
  getTrendingInitSaga
} from '../sagas';

it('Test searchInitSaga', () => {
  const payload = { search: 'cat' };
  const data = {};
  const pagination = { searchPagination: {
    offset: undefined,
    limit: undefined
  } };

  testSaga(searchInitSaga, { payload })
    .next()
    .select(giphyState)
    .next(pagination)
    .call(search, payload.search, pagination.searchPagination)
    .next({ data, pagination: pagination.searchPagination })
    .put(searchSuccess({ data, pagination: pagination.searchPagination }))
    .next()
    .isDone();
});

it('Test getTrendingInitSaga', () => {
  const data = {};

  testSaga(getTrendingInitSaga)
    .next()
    .call(getTrending)
    .next({ data })
    .put(getTrendingSuccess(data))
    .next()
    .isDone();
});
