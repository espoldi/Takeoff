import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../src/utils/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider Theme={Theme}>
        <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
      </ThemeProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();