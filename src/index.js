import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from './redux/store';

// eslint-disable-next-line
const littleCat = `%c \/\\_\/\\\r\n( o.o )\r\n > ^ <`
const font = `font-family: monospace`
const signature = 'agreloe'
console.log(littleCat,font,signature);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
