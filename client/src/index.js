import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, provider } from 'react-redux';
import store from './utils/redux/store';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

