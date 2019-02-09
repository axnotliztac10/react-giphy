import { put, takeLatest, call } from 'redux-saga/effects';

import { getTrending } from 'api/giphy';
import {
  GET_TRENDING_INIT
} from './constants';
import { getTrendingSuccess } from './actions';

export function* getTrendingInitSaga({ payload }) {
  try {
    const trendingList = yield call(getTrending);

    yield put(getTrendingSuccess(trendingList));
  } catch(err) {

  }
}

export default function* giphySaga() {
  yield takeLatest(GET_TRENDING_INIT, getTrendingInitSaga);
}
