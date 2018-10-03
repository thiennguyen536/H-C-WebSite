import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Import main scss
import './main';

//Import Semantic UI and Font-awesome
import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
