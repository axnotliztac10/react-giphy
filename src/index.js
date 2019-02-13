import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './containers/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
