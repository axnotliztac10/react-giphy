import { all } from 'redux-saga/effects';

import giphySaga from 'containers/GiphyProvider/sagas';

export default function* rootSaga() {
  yield all([giphySaga()]);
}
