import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import gyphyProvider from 'containers/GiphyProvider/reducer';

export default combineReducers({
  gyphyProvider,
  form: formReducer
});
