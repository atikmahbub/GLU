import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles/css/style.css';
import './Styles/Scss/index.scss';
import { Provider } from 'react-redux';
import { Store, persistor } from './Redux/Store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import 'three-dots';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import Loader from './components/Loader';

ReactDOM.render(
    <Provider store={Store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
