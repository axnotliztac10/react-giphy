import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState = {}) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(sagaMiddleware)
 );
}

const store = configureStore();
sagaMiddleware.run(rootSaga);

export default store;
