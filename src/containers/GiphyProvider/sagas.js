import { put, takeLatest, call, select } from 'redux-saga/effects';

import { mapStateToProps as giphyState } from './withGiphy';
import {
  getTrending,
  search
} from 'api/giphy';
import {
  GET_TRENDING_INIT,
  SEARCH_INIT
} from './constants';
import {
  getTrendingSuccess,
  getTrendingFail,
  searchSuccess,
  searchFail
} from './actions';

export function* getTrendingInitSaga() {
  try {
    const { data } = yield call(getTrending);

    yield put(getTrendingSuccess(data));
  } catch(err) {
    yield put(getTrendingFail(err));
  }
}

export function* searchInitSaga({ payload }) {
  try {
    const { searchPagination } = yield select(giphyState);
    const { data, pagination } = yield call(search, payload.search, {
      offset: searchPagination.offset,
      limit: searchPagination.itemsPerPage
    });

    yield put(searchSuccess({
      data,
      pagination
    }));
  } catch(err) {
    yield put(searchFail(err));
  }
}

export default function* giphySaga() {
  yield takeLatest(GET_TRENDING_INIT, getTrendingInitSaga);
  yield takeLatest(SEARCH_INIT, searchInitSaga);
}
