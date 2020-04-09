import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.js'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import 'semantic-ui-css/semantic.min.css'
// import history from './history';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </Router>,

document.getElementById('root')
);


