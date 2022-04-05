import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import create from './redux/create';
import App from './App';

const store = create();

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);