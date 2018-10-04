import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThemedApp from './ThemedApp';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(<Provider store={store}><ThemedApp /></Provider>, document.getElementById('root'));
registerServiceWorker();
