import { combineReducers } from 'redux';
import uiReducer from './ui';
import weatherReducer from './weather';

const rootReducer = combineReducers({
  ui: uiReducer,
  weather: weatherReducer,
});

export default rootReducer;