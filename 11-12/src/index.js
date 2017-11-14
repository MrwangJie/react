import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/reset.css'
//import App from './App';
import Rout from './Route'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Rout />, document.getElementById('root'));
registerServiceWorker();
