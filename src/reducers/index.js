//src/reducers/index.js

import {combineReducers} from 'redux';
import postReducer from './postreducer.js';
import authReducer from './authreducer.js'

export default combineReducers({postReducer, authReducer})