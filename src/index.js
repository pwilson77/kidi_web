import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// fonts
import './fonts/GothamBold.ttf';
import './fonts/GothamBoldItalic.ttf';
import './fonts/GothamLight.ttf';
import './fonts/GothamMedium.ttf';
import './fonts/GothamMediumItalic.ttf';
import './fonts/Gotham-Black.otf';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
