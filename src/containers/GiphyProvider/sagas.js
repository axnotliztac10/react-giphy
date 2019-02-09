import { put, takeLatest, call } from 'redux-saga/effects';

import {
  getTrending,
  search
} from 'api/giphy';
import {
  GET_TRENDING_INIT, SEARCH_INIT
} from './constants';
import {
  getTrendingSuccess,
  getTrendingFail,
  searchSuccess,
  searchFail
} from './actions';

export function* getTrendingInitSaga({ payload }) {
  try {
    const { data } = yield call(getTrending);

    yield put(getTrendingSuccess(data));
  } catch(err) {
    yield put(getTrendingFail(err));
  }
}

export function* searchInitSaga({ payload }) {
  try {
    const { data, pagination } = yield call(search, payload);

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
