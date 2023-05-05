import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { store } from './redux/common/store'
import { Provider } from 'react-redux'
import GlobalStyle from './styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
     <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);