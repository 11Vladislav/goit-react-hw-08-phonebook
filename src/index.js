import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'App/App';
import store from './redux/store';
import { GlobalStyle, theme } from 'theme/globalStyles';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <HashRouter>
        <ThemeProvider theme={theme}>
        <GlobalStyle />
          <App />
          </ThemeProvider>
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
