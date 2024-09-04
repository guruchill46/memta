//src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.js';
import './index.css';
import {Provider} from 'react-redux';
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import reducers from './reducers';
import {GoogleOAuthProvider} from '@react-oauth/google';

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

const root = createRoot(document.querySelector('#root'));

root.render(
    <GoogleOAuthProvider clientId="365299638292-m8gdo1s514fa3aae90nt6c8uu15joqp9.apps.googleusercontent.com">
    <Provider store={store}>  
          <App/>
    </Provider>
    </GoogleOAuthProvider>   
)