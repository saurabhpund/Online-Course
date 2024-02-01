// src/store/reducers/index.js
import { combineReducers } from 'redux';
import dataReducer from './dataReducer'; // Import your data reducer
import studentReducer from './studentReducer';

const rootReducer = combineReducers({
  data: dataReducer, 
  student: studentReducer
});

export default rootReducer;
